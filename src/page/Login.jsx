import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ updateStatus }) => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const handleInputChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleInputChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = () => {
    if (email == "Nghi" && Password == "1") {
      updateStatus();
      navigate("/dashboard");
    }
  };
  return (
    <div>
      <input
        value={email}
        placeholder="Email"
        onChange={handleInputChangeEmail}
      />
      <input
        value={Password}
        placeholder="Password"
        onChange={handleInputChangePassword}
      />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
};

export default Login;
