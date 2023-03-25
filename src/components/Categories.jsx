import React, { useEffect, useState } from "react";
import { BiFoodMenu } from "react-icons/bi";
import { StateContextCustom } from "../Context/StateContext";
import Nav from "./Nav";

const Categories = () => {
  const { categories, setCategory } = StateContextCustom();
  const handelOption = (e) => {
    setCategory(e.target.value);
  };
  return (
    <Nav>
      <BiFoodMenu className="text-2xl" />
      <select
        name="category"
        id="category"
        onChange={(e) => handelOption(e)}
        className="bg-transparent outline-none w-[80%] font-bold cursor-pointer"
      >
        {categories?.map((cat) => (
          <option key={cat.idCategory} value={cat.strCategory}>
            {cat?.strCategory}
          </option>
        ))}
      </select>
    </Nav>
  );
};

export default Categories;
