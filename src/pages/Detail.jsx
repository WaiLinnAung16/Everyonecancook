import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";
import { RxDot } from "react-icons/rx";
import { CiBoxList } from "react-icons/ci";
import { TbClipboardText } from "react-icons/tb";
import { BsYoutube } from "react-icons/bs";
const Detail = () => {
  const { id } = useParams();

  const [detailMeal, setDetailMeal] = useState({});
  const fetchId = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await api.json();
    setDetailMeal(data.meals[0]);
    console.log(data);
    // setLoading(false);
  };
  useEffect(() => {
    fetchId();
  }, [id]);
  return (
    <div className=" flex justify-center mt-20">
      <div className="flex items-center gap-5">
        <img
          src={detailMeal?.strMealThumb}
          alt=""
          className=" h-[650px] rounded-md"
        />
        <div className=" flex flex-col items-start mt-5">
          <h1 className="text-3xl font-bold mb-2">{detailMeal?.strMeal}</h1>
          <div className=" flex items-center gap-2 mb-5">
            <p className="text-md font-semibold flex items-center">
              {detailMeal?.strArea}
              <RxDot />
              <HiOutlineGlobeAsiaAustralia className="text-xl" />
            </p>
            <p className="px-4 bg-orange-500 text-white rounded text-sm">
              {detailMeal?.strCategory}
            </p>
          </div>
          <div className=" flex gap-3 mb-5">
            <button className="px-6 py-2 bg-teal-300 flex items-center gap-2 font-semibold rounded shadow">
              <TbClipboardText className="text-lg" />
              Instruction
            </button>
            <button className="px-6 py-2 bg-orange-300 flex items-center gap-2 font-semibold rounded shadow">
              <CiBoxList className="text-lg" />
              Ingredients
            </button>
          </div>
          <div className=" mb-3">
            <p className="tracking-wide leading-7 font-medium">
              {detailMeal?.strInstructions}
            </p>
          </div>
          <a href={detailMeal?.strYoutube} className="flex items-center gap-2">
            <BsYoutube className="text-2xl text-red-600" />
            Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
