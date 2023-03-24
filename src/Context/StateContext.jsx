import { createContext, useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";

const StateContext = createContext();

export const StateContextProvider = ({children})=>{
    const [mealLists,setMealLists] = useState([]);
    const [categories,setCategories] = useState([]);
    const [category,setCategory] = useState('Beef');
    
    const fetchCategory = async()=>{
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const data = await api.json();
        setCategories(data.categories);
    }
    useEffect(()=>{
        fetchCategory();
    },[])

    const fetchData = async()=>{
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await api.json();
        setMealLists(data);
    }
    useEffect(()=>{
        fetchData()
    },[category])
    const data = {mealLists,categories,setCategories,setCategory}
    return(
        <StateContext.Provider value={data}>{children}</StateContext.Provider>
    )
}
export const StateContextCustom = () => useContext(StateContext);