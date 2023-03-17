import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import Nav from "./Nav";
const SideBar = () => {
  return (
    <section className="w-[300px] h-screen fixed">
      <ul className=" flex flex-col items-center my-5 gap-2">
        <Nav>
          <HiOutlineHome className="text-2xl" />
          <p className="font-bold">Home</p>
        </Nav>
        <Nav>
          <BsSearch className="text-2xl" />
          <input
            type="text"
            placeholder="Search"
            className=" outline-none bg-transparent w-[85%] hover:border-b placeholder:font-bold placeholder:text-gray-900"
          />
        </Nav>
        <Nav>
          <BiFoodMenu className="text-2xl" />
          <p className="font-bold">Menu</p>
        </Nav>
      </ul>
    </section>
  );
};

export default SideBar;
