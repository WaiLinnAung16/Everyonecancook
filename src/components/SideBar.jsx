import React, { useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import Nav from "./Nav";
import Categories from "./Categories";
import { StateContextCustom } from "../Context/StateContext";
import { VscSignOut } from "react-icons/vsc";
import { Link } from "react-router-dom";
const SideBar = () => {
  const { setName } = StateContextCustom();
  return (
    <section className="w-[300px] h-screen fixed">
      <ul className=" flex flex-col items-center my-5 gap-2">
        <Link to={"/"} className="w-full">
          <Nav>
            <HiOutlineHome className="text-2xl" />
            <p className="font-bold">Home</p>
          </Nav>
        </Link>
        <Nav>
          <BsSearch className="text-2xl" />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setName(e.target.value)}
            className=" outline-none bg-transparent w-[85%] font-semibold placeholder:font-bold placeholder:text-gray-900 hover:tracking-wide"
          />
        </Nav>
        <Categories />
        {/* <Link to={"/"} className="w-full">
          <Nav>
            <VscSignOut className="text-2xl" />
            <p className="font-bold">Sign Out</p>
          </Nav>
        </Link> */}
      </ul>
    </section>
  );
};

export default SideBar;
