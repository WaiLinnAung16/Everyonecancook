import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [mealLists, setMealLists] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("Beef");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const fetchCategory = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    const data = await api.json();
    setCategories(data.categories);
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = await api.json();
    setMealLists(data);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [category]);

  const fetchName = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const data = await api.json();
    console.log(name);
    setMealLists(data);
    setLoading(false)
  };
  useEffect(() => {
    name ? (setLoading(true),fetchName()) : fetchData();
  }, [name]);

  
  const data = {
    mealLists,
    categories,
    setCategories,
    setCategory,
    loading,
    setName,
  };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};
export const StateContextCustom = () => useContext(StateContext);
