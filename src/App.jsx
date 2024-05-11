import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./page/Login";
import Homepage from "./page/Homepage";
import Dashboard from "./page/Dashboard";
import { useState } from "react";
import PrivateRoute from "./component/PrivateRoute";
import Homepage1 from "./page/Homepage1";
import Homepage2 from "./page/Homepage2";
function App() {
  const [isloggIn, setIsLoggIn] = useState(false);

  const updateStatus = () => {
    setIsLoggIn((prev) => !prev);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login updateStatus={updateStatus} />}
        ></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/homepage1" element={<Homepage1 />}></Route>
        <Route path="/homepage2" element={<Homepage2 />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggIn={isloggIn}>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
