import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PhoneSidebar from "./components/PhoneSidebar";
import SideBar from "./components/SideBar";
import { StateContextCustom } from "./Context/StateContext";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const App = () => {
  const { setShowSidebar, showSidebar } = StateContextCustom();

  return (
    <div className="min-h-screen bg-[#fafafa] select-none">
      <Navbar />
      <div className="xl:w-full 2xl:container 2xl:mx-auto relative">
        {showSidebar && <PhoneSidebar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className=" p-4 text-3xl bg-orange-500/50 text-white/50 rounded-full z-50 fixed bottom-6 right-6 lg:hidden transition-all hover:bg-orange-500 hover:text-slate-50"
        >
          {!showSidebar ? <HiMenuAlt1 /> : <RxCross2 />}
        </div>
      </div>
    </div>
  );
};

export default App;
