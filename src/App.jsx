import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
