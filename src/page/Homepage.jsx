import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Homepage.css";
import { Player } from "@lottiefiles/react-lottie-player";
import run from "../assets/lotties/run.json";

const Homepage = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/homepage1");
  };
  return (
    <div className="background-image relative">
      <p className="text-white text-3xl">2022</p>
      <button onClick={goToLogin} className="absolute bottom-0 right-0 w-full">
        <Player autoplay loop src={run} className="w-2/3"></Player>
      </button>
    </div>
  );
};

export default Homepage;
