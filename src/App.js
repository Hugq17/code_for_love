import './App.css';
import { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { FaHeart } from "react-icons/fa";
import { FaRegKissWinkHeart } from "react-icons/fa";

function App() {

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isPopupOpen2, setPopupOpen2] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  const images = [
    "https://img.upanh.tv/2024/02/09/5fffca7644f3efadb6e2.jpg",
    "https://img.upanh.tv/2024/02/09/6bfe2e904239e867b128.jpg",
    "https://img.upanh.tv/2024/02/09/02dfd4f3b85a12044b4b.jpg",
    "https://img.upanh.tv/2024/02/09/3bce42502ff985a7dce8.jpg",
    "https://img.upanh.tv/2024/02/09/c5e806f96b50c10e9841.jpg",
    "https://img.upanh.tv/2024/02/09/f65a8897e63e4c60152f.jpg",
    "https://img.upanh.tv/2024/02/09/e91c4e87202e8a70d33f.jpg",
    "https://img.upanh.tv/2024/02/09/8b530c206289c8d79198.jpg",
    "https://img.upanh.tv/2024/02/09/0bbc8258edf147af1ee0.jpg",
    "https://img.upanh.tv/2024/02/09/aebb39c2566bfc35a57a.jpg",
    "https://img.upanh.tv/2024/02/09/db21fab48a1d2043790c.jpg",
    "https://img.upanh.tv/2024/02/09/5ca2cf10beb914e74da8.jpg",
    "https://img.upanh.tv/2024/02/09/16c38d5efcf756a90fe6.jpg",
    "https://img.upanh.tv/2024/02/09/2d869ee7ef4e45101c5f.jpg",
    "https://img.upanh.tv/2024/02/09/aa4a4a573bfe91a0c8ef.jpg",
    "https://img.upanh.tv/2024/02/09/c7696ec3026aa834f17b.jpg",

    // Thêm đường dẫn hình ảnh khác vào đây
  ];

  // Hàm mở popup
  const openPopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  const openPopup2 = () => {
    setPopupOpen2(!isPopupOpen2);

  };

  // Hàm đóng popup
  const toggleGrid = () => {
    setShowGrid(!showGrid); // Đảo ngược giá trị của biến trạng thái khi bạn nhấn vào nút
  };




  return (
    <>
      <div>
        <Player
          src='https://lottie.host/716feba2-dcf4-4431-b368-ff04f3342193/9UApqxjgzC.json'
          className="player"
          loop
          autoplay
          style={{ width: '200px', height: '250px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'center', fontFamily: 'sans-serif' }}>
          <p >Gửi tặng Ngọc Nghi</p>
        </div>
        <div class="button-container">
          <button class="my-button" onClick={() => openPopup()} style={{ backgroundColor: '#F28585', marginRight: '25px' }}>Happy</button>
          <button class="my-button" onClick={toggleGrid} style={{ backgroundColor: '#FFA447', marginRight: '25px' }}>New</button>
          <button class="my-button" onClick={() => openPopup2()} style={{ backgroundColor: '#7E2553' }}>Year</button>
          {/* <button class="my-button" style={{ backgroundColor: '#FF004D' }}></button> */}
        </div>
        {isPopupOpen && (
          <div className="popup" >
            <div className="popup-content" style={{ fontFamily: 'sans-serif' }}>
              <p>Gửi em Ngọc Nghi cute dth xinh đẹp</p>
              <p>Một năm mới tràn đầy sức khỏe</p>
              <p>Một năm đại thành công và thịnh vượng</p>
              <p>Gặt hái được những điều em mong muốn nheee</p>
              <p>Mong những điều tốt đẹp đến bên em và gia đình <FaRegKissWinkHeart style={{ marginRight: '5px' }} /><FaRegKissWinkHeart /></p>
            </div>
          </div>

        )}
        {isPopupOpen && (
          <div style={{ float: 'right', marginRight: '500px' }} >
            <Player
              src='https://lottie.host/31c60b4c-00a5-4f5b-aec4-9b768a94c3ee/4JCNa2kRqm.json'
              className="player"
              loop
              autoplay
              style={{ width: '200px', height: '250px' }}
            />

          </div>
        )}
        {isPopupOpen && (
          <div style={{ float: 'left', marginLeft: '500px' }} >
            <Player
              src='https://lottie.host/59ce8a6d-8963-44b0-8646-d2e845329e57/liLCq1SYll.json'
              className="player"
              loop
              autoplay
              style={{ width: '200px', height: '250px' }}
            />

          </div>
        )}
        {isPopupOpen2 && (
          <div className="popup" >
            <div className="popup-content" style={{ fontFamily: 'sans-serif' }}>
              <p>
                Lời cuối !!! Cảm ơn em đã cùng anh qua bao
                nhiu khó khăn vất vả mỗi lần cãi vả ko phải để ghét nhau mà để hỉu nhau hơn. Chuyện cũ ta bỏ qua hahaa
                để cùng chào đón năm mới,
                hy vọng sẽ đón nhìu năm hơn nữa nheeee.
              </p>
              <p>Cưng như em bé...</p>
              <p>Love u babe <FaHeart style={{ marginRight: '5px' }} /><FaHeart style={{ marginRight: '5px' }} /><FaHeart style={{ marginRight: '5px' }} /><FaHeart style={{ marginRight: '5px' }} /></p>
            </div>
          </div>
        )}
        {isPopupOpen2 && (
          <div style={{ float: 'left', marginLeft: '500px' }} >
            <Player
              src='https://lottie.host/987be7e7-2d23-49c9-8ac5-482d21cab74f/yp6xZU49lg.json'
              className="player"
              loop
              autoplay
              style={{ width: '200px', height: '250px' }}
            />

          </div>
        )}
        {isPopupOpen2 && (
          <div style={{ float: 'left', marginLeft: '500px' }} >
            <Player
              src='https://lottie.host/948a9a01-d25e-44a6-aa64-e57c3d699a14/jtIpkCIfAn.json'
              className="player"
              loop
              autoplay
              style={{ width: '200px', height: '250px' }}
            />

          </div>
        )}

        {showGrid && ( // Nếu biến trạng thái là true, hiển thị lưới
          <div className="grid-container">
            {images.map((image, index) => (
              <div key={index} className="grid-item">
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
