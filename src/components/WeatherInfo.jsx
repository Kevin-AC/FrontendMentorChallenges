import WeatherDetailCard from "./WeatherDetailCard";
import { useWeatherContext } from "../context/WeatherContext";

export default function WeatherInfo(){
    const { ciudadInput, weather } = useWeatherContext();
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
    
    return(
        <section className="w-full h-auto mt-8 flex flex-col gap-4 items-center bg-Neutral-900">
            <div className="w-full h-71.5 py-20 px-5 flex flex-col md:flex-row md:items-center justify-center rounded-3xl bg-no-repeat bg-center bg-cover  bg-[url(assets/images/bg-today-small.svg)] md:bg-[url(assets/images/bg-today-large.svg)] ">
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
                    <img className="w-30" src="assets/images/icon-sunny.webp" alt="Temperature-Icon" />
                    <p className="font-semibold italic text-7xl text-Neutral-0">{actual.temp}°</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:flex md:gap-5">
                <WeatherDetailCard value={`${actual.feelsLike} °`} text="Feels Like"/>
                <WeatherDetailCard value={`${actual.humidity} %`} text="Humidity" />
                <WeatherDetailCard value={`${actual.wind} mph`} text="Wind" />
                <WeatherDetailCard value={`${actual.precipitation} in`} text="Precipitation" />
            </div>
        </section>
    )
}