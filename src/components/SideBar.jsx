import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Nav from "./Nav";
import Categories from "./Categories";
import { StateContextCustom } from "../Context/StateContext";

const SideBar = () => {
  const { setName } = StateContextCustom();
  return (
    <section className="hidden lg:block lg:w-[230px] xl:w-[300px] h-screen fixed">
      <ul className=" flex flex-col items-center my-5 gap-2">
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
      </ul>
    </section>
  );
};

export default SideBar;
