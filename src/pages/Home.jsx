import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import PhoneSidebar from "../components/PhoneSidebar";
import SideBar from "../components/SideBar";
import { StateContextCustom } from "../Context/StateContext";

const Home = () => {
  const profileInfo = useLocation();
  const [infos, setInfos] = useState({});
  const { showSidebar } = StateContextCustom();
  useEffect(() => {
    setInfos(profileInfo.state);
    console.log(infos);
  }, [setInfos]);
  return (
    <div className="w-full">
      <section className="container mx-auto">
        <SideBar />

        <Content />
      </section>
    </div>
  );
};

export default Home;
