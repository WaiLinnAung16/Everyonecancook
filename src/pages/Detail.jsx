import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";
import { RxDot } from "react-icons/rx";
import { CiBoxList } from "react-icons/ci";
import { TbClipboardText } from "react-icons/tb";
import { BsYoutube } from "react-icons/bs";
import { CgArrowLeftR } from "react-icons/cg";
import Ingredients from "../components/Ingredients";

const Detail = () => {
  const { id } = useParams();
  const [detailMeal, setDetailMeal] = useState({});
  const [show, setShow] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  const fetchId = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await api.json();
    setDetailMeal(data.meals[0]);
  };
  useEffect(() => {
    fetchId();
  }, [id]);
  useEffect(() => {
    const array = [
      { id: 1, item: detailMeal.strIngredient1 },
      { id: 2, item: detailMeal.strIngredient2 },
      { id: 3, item: detailMeal.strIngredient3 },
      { id: 4, item: detailMeal.strIngredient4 },
      { id: 5, item: detailMeal.strIngredient5 },
      { id: 6, item: detailMeal.strIngredient6 },
      { id: 7, item: detailMeal.strIngredient7 },
      { id: 8, item: detailMeal.strIngredient8 },
      { id: 9, item: detailMeal.strIngredient9 },
      { id: 10, item: detailMeal.strIngredient10 },
      { id: 11, item: detailMeal.strIngredient11 },
      { id: 12, item: detailMeal.strIngredient12 },
      { id: 13, item: detailMeal.strIngredient13 },
      { id: 14, item: detailMeal.strIngredient14 },
      { id: 15, item: detailMeal.strIngredient15 },
      { id: 16, item: detailMeal.strIngredient16 },
      { id: 17, item: detailMeal.strIngredient17 },
      { id: 18, item: detailMeal.strIngredient18 },
      { id: 19, item: detailMeal.strIngredient19 },
      { id: 20, item: detailMeal.strIngredient20 },
    ];
    setIngredients(array);
  }, [detailMeal]);

  return (
    <>
      <div className=" flex flex-col items-center justify-center gap-8  p-5 py-10">
        <div className="flex flex-col xl:flex-row items-center gap-5">
          <img
            src={detailMeal?.strMealThumb}
            alt=""
            className="h-[350px] md:h-[600px] rounded-md"
          />
          <div className=" flex flex-col items-start w-full md:w-[98%] lg:w-[800px]">
            <h1 className="text-3xl font-bold mb-3">{detailMeal?.strMeal}</h1>
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
            <div className=" flex flex-col-reverse gap-5 md:flex-row justify-between w-full mb-5">
              <div className="flex flex-row gap-3">
                <button
                  onClick={() => setShow(true)}
                  className={`px-6 py-2 flex items-center gap-2 font-semibold rounded transition-all ${
                    show
                      ? "bg-teal-600 text-white shadow"
                      : "bg-teal-300 shadow-sm text-gray-600"
                  }`}
                >
                  <TbClipboardText className="text-lg" />
                  Instruction
                </button>
                <button
                  onClick={() => setShow(false)}
                  className={`px-6 py-2 flex items-center gap-2 font-semibold rounded transition-all ${
                    !show
                      ? "bg-orange-500 text-white shadow"
                      : "bg-orange-300 shadow-sm text-gray-600"
                  }`}
                >
                  <CiBoxList className="text-lg" />
                  Ingredients
                </button>
              </div>
              <a
                href={detailMeal?.strYoutube}
                className="flex items-center gap-2 group"
              >
                <BsYoutube className="text-2xl text-red-600 group-hover:animate-bounce" />
                Watch on YouTube
              </a>
            </div>
            <div className="h-[350px] w-[100%] overflow-y-scroll custom-scrollbar">
              {show ? (
                <p className=" tracking-wide leading-7 font-medium">
                  {detailMeal?.strInstructions}
                </p>
              ) : (
                <Ingredients ingredients={ingredients} />
              )}
            </div>
          </div>
        </div>
        <Link to={"/"}>
          <div className=" flex items-center gap-2 mx-auto text-orange-500 font-bold group cursor-pointer">
            <CgArrowLeftR className="text-2xl transition-transform duration-500 transform group-hover:-translate-x-1" />
            <p className="transition-all duration-500 group-hover:tracking-wider md:text-base text-lg">
              Back To Home
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Detail;
