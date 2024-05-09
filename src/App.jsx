import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Homepage from "./page/Homepage";
import Dashboard from "./page/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
