import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />
      <div className="xl:w-full 2xl:container 2xl:mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
