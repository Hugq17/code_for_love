import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const handleLogin = () => {
    if (email === "Nghi" && password === "1") {
      updateStatus();
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        className="border border-gray-400 rounded-md px-3 py-2 mb-4"
        value={email}
        placeholder="Email"
        onChange={handleInputChangeEmail}
      />
      <input
        className="border border-gray-400 rounded-md px-3 py-2 mb-4"
        value={password}
        placeholder="Password"
        type="password"
        onChange={handleInputChangePassword}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogin}
      >
        Đăng nhập
      </button>
    </div>
  );
};

export default Login;
