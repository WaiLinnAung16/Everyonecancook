import React from "react";
import { BsSearch } from "react-icons/bs";
import { HiMenuAlt1 } from "react-icons/hi";
import { StateContextCustom } from "../Context/StateContext";
import Categories from "./Categories";
import Nav from "./Nav";

const PhoneSidebar = () => {
  const { setName, setShowSidebar } = StateContextCustom();
  const searchHandler = (e) => {
    e.preventDefault();
    setName(e.target.children[0].value);
    setShowSidebar(false);
  };
  return (
    <div className=" w-full md:w-[80%] bg-white fixed right-0 z-20 lg:hidden">
      <ul className=" flex flex-col items-end mt-5 gap-2 h-screen">
        <Nav>
          <BsSearch className="text-2xl" />
          <form onSubmit={(e) => searchHandler(e)} className="w-full">
            <input
              type="text"
              placeholder="Search"
              className=" outline-none bg-transparent w-full font-semibold placeholder:font-bold placeholder:text-gray-900 hover:tracking-wide"
            />
          </form>
        </Nav>
        <Categories />
      </ul>
    </div>
  );
};

export default PhoneSidebar;
