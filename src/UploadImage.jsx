import  { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL, listAll, deleteObject } from "firebase/storage";
import { storage } from "./firebaseConfig";

const UploadImage = () => {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    const listRef = ref(storage, "images/");
    listAll(listRef)
      .then(async (res) => {
        const urls = await Promise.all(
          res.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return { url, path: item.fullPath };
          })
        );
        setUploadedImages(urls);
      })
      .catch((error) => console.error("Lỗi tải danh sách ảnh:", error));
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImages([...e.target.files]);
    }
  };

  const handleUpload = () => {
    if (images.length === 0) return alert("Vui lòng chọn ảnh!");

    setUploading(true);
    setProgress(0);

    const uploadPromises = images.map((image) => {
      const storageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(Math.round(percent));
          },
          (error) => {
            console.error("Lỗi upload:", error);
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve({ url: downloadURL, path: `images/${image.name}` });
          }
        );
      });
    });

    Promise.all(uploadPromises)
      .then((urls) => {
        setUploadedImages((prev) => [...prev, ...urls]);
        setUploading(false);
        setImages([]);
      })
      .catch((err) => {
        console.error("Upload thất bại:", err);
        setUploading(false);
      });
  };

  const handleDelete = (path) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa ảnh này?");
    if (!confirmDelete) return;

    const imageRef = ref(storage, path);
    deleteObject(imageRef)
      .then(() => {
        setUploadedImages(uploadedImages.filter((img) => img.path !== path));
      })
      .catch((error) => console.error("Lỗi xóa ảnh:", error));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">📸 Upload & Quản lý Ảnh</h2>
      
      <div className="flex flex-col items-center">
        <input type="file" multiple onChange={handleImageChange} className="mb-4 border p-2 rounded-lg" />
        
        <button 
          onClick={handleUpload} 
          disabled={uploading} 
          className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          {uploading ? `Đang tải lên... ${progress}%` : "📤 Upload Ảnh"}
        </button>

        {uploading && (
          <div className="w-full bg-gray-300 rounded-lg mt-4">
            <div className="bg-blue-500 text-xs font-medium text-white text-center p-1 rounded-lg" style={{ width: `${progress}%` }}>
              {progress}%
            </div>
          </div>
        )}
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-3">📂 Danh sách ảnh:</h3>

      <div className="grid grid-cols-3 gap-4">
        {uploadedImages.map((img, index) => (
          <div key={index} className="relative group rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
            <img src={img.url} alt={`Uploaded ${index}`} className="w-full h-32 object-cover" />
            <button
              onClick={() => handleDelete(img.path)}
              className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
            >
              ❌ Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadImage;
