import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Homepage.css";
import { Player } from "@lottiefiles/react-lottie-player";
import run from "../assets/lotties/run.json";

const Homepage2 = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="background-image2 relative">
      <p className="text-white text-3xl">2024</p>
      <button onClick={goToLogin} className="absolute bottom-0 left-0 w-full">
        <Player autoplay loop src={run} className="w-2/3"></Player>
      </button>
    </div>
  );
};

export default Homepage2;
