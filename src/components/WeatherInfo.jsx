import WeatherDetailCard from "./WeatherDetailCard";
import { useWeatherContext } from "../context/WeatherContext";
import { WeatherIcon } from "./WeatherIcon";
import { celsiusToFahrenheit,kmhToMph, mmToInch} from "../utils/changeUnits";
import { act } from "react";
export default function WeatherInfo(){
    const { ciudadInput, weather, isImperial } = useWeatherContext();
    if (!ciudadInput) {
        return (
            <section className="w-full h-auto mt-8 flex justify-center items-center">
                <p className="text-Neutral-0">Cargando clima...</p>
            </section>
        );
    }
    if (!weather || typeof weather !== "object") {
        return (
            <section className="w-full h-auto mt-8 flex justify-center items-center">
                <p className="text-Neutral-0">
                    Cargando clima para <strong>{ciudadInput}</strong>...
                </p>
            </section>
        );
    }

    const {ciudad,actual}=weather;
    //const temp = isImperial ? Math.round(celsiusToFahrenheit(weather.temp)) : Math.round(weather.temp);
    function formatTemperature(temp){
        return isImperial ? Math.round(celsiusToFahrenheit(temp)) : Math.round(temp);
    }
    return(
        <section className="w-full h-auto mt-8 flex flex-col gap-4 lg:gap-8 items-center bg-Neutral-900">
            <div className="w-full h-71.5 py-20 px-5 flex flex-col md:flex-row md:items-center justify-center rounded-3xl bg-no-repeat bg-center bg-cover  sm:bg-[url(assets/images/bg-today-small.svg)] bg-[url(assets/images/bg-today-large.svg)] ">
                <div className="text-Neutral-0 text-center md:text-left md:w-96 md:flex flex-col">
                    <p className="font-bold text-3xl">{ciudad.nombre},{ciudad.pais}</p>
                    <p className="font-medium text-[18px] opacity-80">
                            {new Date(actual.time).toLocaleDateString("en-US",{
                            weekday:"long",
                            month:"short",
                            day:"numeric",
                            year:"numeric"
                            })}
                    </p>
                </div>
                <div className="flex items-center">
                    <WeatherIcon weathercode={actual.weathercode} size="w-30 h-30"/>
                    <p className="font-semibold italic text-7xl text-Neutral-0">{formatTemperature(actual.temp)}°{isImperial ? "F": "C"}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:flex md:gap-5 lg:gap-6">
                <WeatherDetailCard value={`${formatTemperature(actual.feelsLike)} °${isImperial ? "F": "C"}`} text="Feels Like"/>
                <WeatherDetailCard value={`${actual.humidity} %`} text="Humidity" />
                <WeatherDetailCard value={`${Math.round(isImperial ? kmhToMph(actual.wind): actual.wind) }${isImperial ? " mph":" km/h"} `} text="Wind" />
                <WeatherDetailCard value={`${Math.round(isImperial ? mmToInch(actual.precipitation):actual.precipitation) } ${isImperial ? "in" :"mm"}`} text="Precipitation" />
            </div>
        </section>
    )
}