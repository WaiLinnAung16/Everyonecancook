import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const profileInfo = useLocation();
  const [infos, setInfos] = useState({});

  useEffect(() => {
    setInfos(profileInfo.state);
    console.log(infos);
  }, [profileInfo]);
  return (
    <div className="w-full ">
      <Navbar profileInfo={profileInfo.state} />
    </div>
  );
};

export default Home;
