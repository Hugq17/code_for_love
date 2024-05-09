import React from "react";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="h-max">
      <p>Trang home page nè</p>
      <button onClick={goToLogin}>Login</button>
    </div>
  );
};

export default Homepage;
