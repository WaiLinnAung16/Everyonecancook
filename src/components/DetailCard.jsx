import React from "react";
import { StateContextCustom } from "../Context/StateContext";

const DetailCard = ({ meal }) => {
  console.log(meal);
  return (
    <div className="p-5 ">
      <img src={meal.strMealThumb} alt="" className=" " />
      <div>
        <h1>{meal.strMeal}</h1>
        <p>{meal.strCategory}</p>
        <p>{meal.strTags}</p>
        <p>{meal.strArea}</p>
        <p>{meal.strInstructions}</p>
        <button>{meal.strYoutube}</button>
      </div>
    </div>
  );
};

export default DetailCard;
