import React from "react";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import chilling from "../assets/lotties/chilling.json";

const Homepage = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="bg-slate-500 h-screen">
      <p>Trang home page nè</p>
      <button onClick={goToLogin}>Login</button>
    </div>
  );
};

export default Homepage;
