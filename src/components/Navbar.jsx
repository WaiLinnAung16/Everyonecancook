import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
const Navbar = ({ profileInfo }) => {
  return (
    <section className=" bg-white shadow-md">
      <div className=" container mx-auto py-4 flex justify-between items-center">
        <h1>HomeIcon</h1>
        <ul className="flex gap-8">
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </ul>
        <div className=" flex items-center gap-2">
          <div className=" text-sm text-end">
            <p>{profileInfo.name}</p>
            <p>{profileInfo.email}</p>
          </div>
          <div className=" w-10 h-10 rounded-full overflow-hidden ring-2 ring-orange-800 ring-offset-2">
            <img
              src="https://images.unsplash.com/photo-1474031317822-f51f48735ddd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="profile-img"
              className="h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
