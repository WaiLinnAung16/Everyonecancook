import React from "react";
import { TiTickOutline } from "react-icons/ti";
const Ingredients = ({ ingredients }) => {
  return (
    <div className="flex flex-col">
      {ingredients.map((ingredient) => {
        return (
          <div key={ingredient.id}>
            {ingredient.item && (
              <h1 className="flex gap-2 items-center border-b py-3 pl-2 cursor-pointer hover:bg-gray-200">
                <TiTickOutline /> {ingredient.item}
              </h1>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Ingredients;
