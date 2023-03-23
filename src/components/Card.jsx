import React from "react";
import { FaEye, FaShare, FaComment, FaStar } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
const Card = ({ meal }) => {
  return (
    <div className="col-span-3 p-5 rounded bg-slate-50  ">
      <div className=" mb-5 relative group  overflow-hidden">
        <img
          src={meal.strMealThumb}
          className="h-[300px] w-full object-cover transition-all duration-300 group-hover:scale-105"
        />
        <div className=" bg-gray-900/60 absolute h-full w-full flex justify-center items-center gap-5 top-0 left-0 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <button className=" p-4 bg-orange-500 text-white font-bold tracking-wider rounded-full transition duration-300 hover:bg-white hover:text-orange-500">
            <FaEye className="text-2xl" />
          </button>
          <button className=" p-4 ring-2 ring-orange-500 text-white font-bold tracking-wider rounded-full transition duration-300 hover:bg-white hover:text-orange-500 hover:ring-white">
            <IoBookmarkOutline className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className=" text-2xl">{meal.strMeal}</h1>
        <div className=" flex gap-2">
          <div className="p-2 ring-2 ring-orange-500 text-gray-800 font-bold tracking-wider rounded-full transition duration-300 hover:bg-orange-500 hover:text-white ">
            <FaStar className="text-xl" />
          </div>
          <div className="p-2 ring-2 ring-orange-500 text-gray-800 font-bold tracking-wider rounded-full transition duration-300 hover:bg-orange-500 hover:text-white">
            <FaComment className="text-xl" />
          </div>
          <div className="p-2 ring-2 ring-orange-500 text-gray-800 font-bold tracking-wider rounded-full transition duration-300 hover:bg-orange-500 hover:text-white">
            <FaShare className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
