import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Homepage.css";
import { Player } from "@lottiefiles/react-lottie-player";
import run from "../assets/lotties/run.json";

const Homepage = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="background-image relative">
      <button onClick={goToLogin} className="absolute bottom-0 right-32 w-full">
        <Player autoplay loop src={run} className="w-2/3"></Player>
      </button>
    </div>
  );
};

export default Homepage;
