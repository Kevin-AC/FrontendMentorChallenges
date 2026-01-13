import { useState } from "react";
import { useWeatherContext } from "../context/WeatherContext";
export default function Search(){
    const[buscarCiudad,setBuscarCiudad] = useState("");
    const {setCiudadInput} = useWeatherContext();

    const handleSubmit=()=>{
        const value = buscarCiudad.trim();
        if(!value)return;
        setCiudadInput(value)
    }
    return(
        <div className="w-full lg:w-2xl h-auto text-[20px] font-medium tracking-wider flex flex-col md:flex-row md:items-center md: gap-4 lg:mx-auto relative ">
            <img src="/assets/images/icon-search.svg" alt="iconSearch" className="top-4.5  left-3 absolute ml-1.5 " />
            <input
                type="text"
                className="py-4 px-12.5 w-full  h-14 bg-Neutral-800 opacity-100 rounded-xl text-Neutral-200"
                placeholder="Search for a place..."
                value={buscarCiudad}
                onChange={(e)=>setBuscarCiudad(e.target.value)}
                
            />
            
            <button className="w-full md:w-28 h-14 bg-Blue-500 rounded-xl text-Neutral-0  hover:cursor-pointer "
                    onClick={handleSubmit}>
                Search
            </button>
            
        </div>
    )
}