import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({children})=>{
    const [mealLists,setMealLists] = useState([]);

    const fetchData = async()=>{
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
        const data = await api.json();
        setMealLists(data);
    }
    useEffect(()=>{
        fetchData()
    },[])
    const data = {mealLists}
    return(
        <StateContext.Provider value={data}>{children}</StateContext.Provider>
    )
}
export const StataContextCustom = () => useContext(StateContext);