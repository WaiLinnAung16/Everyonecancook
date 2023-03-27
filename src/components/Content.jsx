import React from "react";
import { StateContextCustom } from "../Context/StateContext";
import Card from "./Card";
import Loading from "./Loading";

const Content = () => {
  const { mealLists, loading } = StateContextCustom();
  // console.log(mealLists.meals);
  const meals = mealLists.meals;
  return (
    <div className="min-h-screen lg:ml-[230px] xl:ml-[300px] bg-[#f0f0f0]">
      <div className=" grid grid-cols-6 gap-5 p-5">
        {loading ? (
          <Loading />
        ) : (
          meals?.map((meal) => <Card key={meal.idMeal} meal={meal} />)
        )}
      </div>
    </div>
  );
};

export default Content;
