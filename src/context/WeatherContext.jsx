import { createContext,useContext,useState,useEffect } from "react";
import { getWeatherByCity } from "../api/getWeatherByCity";

const WeatherContext = createContext(null)

export function WeatherProvider({children}){
    const [ciudadInput, setCiudadInput] = useState("");
    const [weather,setWeather]= useState("")

    useEffect(()=>{
       
        if(!ciudadInput){
          
            return;
        } 
        async function load() {
            
            try{
                const data = await getWeatherByCity(ciudadInput);
                console.log("✅ DATA RECIBIDA:");
                setWeather(data);
                console.log(data)
            }catch(e){
                console.error(e);
            }
        }
        load();
    },[ciudadInput]);

    const value = {ciudadInput,setCiudadInput,weather};
    return(
        <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
    )

}

export function useWeatherContext(){
    const contex = useContext(WeatherContext);
    if(!contex){
        throw new Error("useWeatherContext debe usarse dentro de WeatherProvider")
    }
    return contex;

}