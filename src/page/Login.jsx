import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import moon from "../assets/lotties/moon.json";

const Login = ({ updateStatus }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleInputChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleInputChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    if (email === "Nghi" && password === "1") {
      updateStatus();
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex h-screen w-full">
      <div className="bg-[#350184] w-1/2 h-screen flex">
        <Player autoplay loop src={moon} className="w-full"></Player>
      </div>
      <div className="flex items-center p-40">
        <form onSubmit={handleLogin} className="flex flex-col items-center">
          <p className="text-6xl">Code For Love</p>
          <div className="mt-10">
            <input
              value={email}
              placeholder="Username"
              onChange={handleInputChangeEmail}
              className="bg-[#F1F1F1] p-3 rounded-md w-full"
            />
          </div>
          <div className="mt-1 mb-8">
            <input
              placeholder="Password"
              value={password}
              type="password"
              onChange={handleInputChangePassword}
              className="bg-[#F1F1F1] p-3 rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-max"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
