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
        <div className="w-full h-auto text-[20px] font-medium tracking-wider flex flex-col md:flex-row md:items-center md: gap-4 ">
            <input
                type="text"
                className="flex items-center gap-3 py-4 px-5 w-full  h-14 bg-Neutral-800 opacity-100 rounded-xl text-Neutral-200"
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