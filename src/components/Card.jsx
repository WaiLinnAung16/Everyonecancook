import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { SlDislike, SlLike} from "react-icons/sl";
import { StateContextCustom } from "../Context/StateContext";
const Card = ({ meal }) => {
  const {setMealId} = StateContextCustom();
  return (
    <div className="col-span-3 p-5 rounded h-[420px] flex flex-col gap-3 bg-slate-50 shadow-md cursor-pointer">
      <div className=" mb-5 relative group overflow-hidden rounded-sm">
        <img
          src={meal.strMealThumb}
          className="h-[300px] w-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className=" bg-gray-900/60 absolute h-full w-full flex justify-center items-center gap-5 top-0 left-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <button onClick={()=>setMealId(meal.idMeal)} className=" p-4 bg-orange-500 text-white font-bold tracking-wider rounded-full transition duration-500 hover:bg-white hover:text-orange-500">
            <FaEye className="text-2xl" />
          </button>
          <button className=" p-4 ring-2 ring-orange-500 text-white font-bold tracking-wider rounded-full transition duration-500 hover:bg-white hover:text-orange-500 hover:ring-white">
            <IoBookmarkOutline className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className=" text-xl w-[300px] truncate">{meal.strMeal}</h1>
        <div className=" flex gap-3">
          <div className="p-2 w-16 flex justify-center items-center gap-2 text-xl ring-2 ring-orange-500 text-gray-800 font-bold tracking-wider rounded-full transition duration-500 hover:bg-orange-500 hover:text-white ">
            <SlLike />
            <span className="text-base">10</span>
          </div>
          <div className="p-2 w-16 flex justify-center items-center gap-2 text-xl ring-2 ring-orange-500 text-gray-800 font-bold tracking-wider rounded-full transition duration-500 hover:bg-orange-500 hover:text-white">
            <SlDislike />
            <span className="text-base">2</span>
          </div>
          {/* <div className="p-2 ring-2 ring-orange-500 text-gray-800 font-bold tracking-wider rounded-full transition duration-500 hover:bg-orange-500 hover:text-white">
            <VscComment className="text-xl" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
