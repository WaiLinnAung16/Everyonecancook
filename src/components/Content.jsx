import React from "react";
import { StataContextCustom } from "../Context/StateContext";
import Card from "./Card";

const Content = () => {
  const {mealLists} = StataContextCustom();
  console.log(mealLists.meals);
  const meals = mealLists.meals;
  return <div className="min-h-screen ml-[300px]">
    <div className=" flex flex-col gap-5 p-5">
    {meals?.map((meal)=><Card key={meal.idMeal} meal={meal}/>)}
    </div>
  </div>;
};

export default Content;
