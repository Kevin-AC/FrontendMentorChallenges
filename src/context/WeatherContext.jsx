import { createContext,useContext,useState,useEffect } from "react";
import { getWeatherByCity } from "../api/getWeatherByCity";

const WeatherContext = createContext(null)

export function WeatherProvider({children}){
    const [ciudadInput, setCiudadInput] = useState("kioto");
    const [weather,setWeather]= useState(null);
    const [isImperial,setIsImperial] = useState(false)//cambio de unidad de medida
    const [selectedDay,setSelectedDay]=useState(0);
    const [isLoading, setIsLoading] = useState(true); //  Estado de carga

    useEffect(()=>{
       
        if(!ciudadInput){
          
            return;
        } 
        async function load() {
            setIsLoading(true)
            try{
                const data = await getWeatherByCity(ciudadInput);
                console.log("✅ DATA RECIBIDA:");
                setWeather(data);
                
            }catch(e){
                console.error(e);
            }finally{
                setIsLoading(false)
            }
        }
        load();
    },[ciudadInput]);

    const value = {ciudadInput,setCiudadInput,weather,isImperial,setIsImperial,selectedDay,setSelectedDay,isLoading};
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