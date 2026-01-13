import { createContext,useContext,useState,useEffect } from "react";
import { getWeatherByCity } from "../api/getWeatherByCity";

const WeatherContext = createContext(null)

export function WeatherProvider({children}){
    const [ciudadInput, setCiudadInput] = useState("");
    const [weather,setWeather]= useState(null);
    const [isImperial,setIsImperial] = useState(false)//cambio de unidad de medida
    const [selectedDay,setSelectedDay]=useState(0);
    const [isLoading, setIsLoading] = useState(false); //  Estado de carga\
    const [hasSearched,setHasSearched] = useState(true);

    useEffect(()=>{
       
        if (!ciudadInput || ciudadInput.trim() === "") {
            return;
        } 
        async function load() {
            setIsLoading(true)
            setHasSearched(true)
            try{
                const data = await getWeatherByCity(ciudadInput);
                console.log("✅ DATA RECIBIDA:");
                setWeather(data);
                
            }catch(e){
                console.error(e);
                setWeather(null)
            }finally{
                setIsLoading(false)
            }
        }
        load();
    },[ciudadInput]);

    const value = {ciudadInput,setCiudadInput,weather,isImperial,setIsImperial,selectedDay,setSelectedDay,isLoading,hasSearched};
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