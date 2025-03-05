import  { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "./firebaseConfig";

const UploadImage = () => {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedImages, setUploadedImages] = useState([]);

  // Tự động lấy ảnh khi vào trang
  useEffect(() => {
    fetchImages();
  }, []);

  // Lấy danh sách ảnh từ Firebase
  const fetchImages = () => {
    const listRef = ref(storage, "images/");
    listAll(listRef)
      .then(async (res) => {
        const urls = await Promise.all(res.items.map((item) => getDownloadURL(item)));
        setUploadedImages(urls);
      })
      .catch((error) => console.error("Lỗi tải danh sách ảnh:", error));
  };

  // Chọn file
  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImages([...e.target.files]);
    }
  };

  // Upload file lên Firebase
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
            resolve(downloadURL);
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

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">📸 Upload và Hiển Thị Ảnh</h2>
      
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
        {uploadedImages.map((url, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
            <img src={url} alt={`Uploaded ${index}`} className="w-full h-32 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadImage;
