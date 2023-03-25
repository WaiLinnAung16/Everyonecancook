import React from "react";
import { SiCodechef } from "react-icons/si";
const Navbar = () => {
  return (
    <section className=" bg-white shadow-md sticky top-0 z-10">
      <div className=" container mx-auto py-5 flex justify-between items-center">
        <h1 className=" font-bold text-orange-700 flex items-center gap-2">
          <SiCodechef className="text-4xl" />
          <p className="w-28 text-xl leading-5">Everyone Can Cook</p>
        </h1>
        <div className=" flex items-center gap-2">
          <div className=" text-sm text-end">
            <p>Name</p>
            <p>Name@gmail.com</p>
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
