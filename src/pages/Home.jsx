import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Home = () => {
  const profileInfo = useLocation();
  const [infos, setInfos] = useState({});

  useEffect(() => {
    setInfos(profileInfo.state);
    console.log(infos);
  }, [setInfos]);
  return (
    <div className="w-full ">
      <Navbar profileInfo={infos} />
      <section className="container mx-auto">
        <SideBar />
        <Content />
      </section>
    </div>
  );
};

export default Home;
