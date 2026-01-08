import { useWeatherContext } from "../context/WeatherContext";
import ForecastCard from "./ForecastCard";

export default function DailyForecast(){
    const {weather} = useWeatherContext();
    if (!weather) {
        return;
    }
    const { daily } = weather;
    function getWeekdayName(dataString){
        const data= new Date(dataString);
        return data.toLocaleDateString('en-US',{weekday:"short"});
    }
    return(
        <section className="mt-5 bg-Neutral-900">
            <h2 className="font-semibold text-2xl text-Neutral-0 mb-5">Daily forecast</h2>
            <div className="grid grid-cols-3 gap-4 md:flex ">
                {daily.time.map((dataString,i)=>(
                    <ForecastCard
                        key={dataString}
                        day={getWeekdayName(dataString)}
                        icon={"public/assets/images/icon-partly-cloudy.webp"}
                        maxTemp={`${Math.round(daily.temperature_2m_max[i])}°`}
                        minTemp={`${Math.round(daily.temperature_2m_min[i])}°`}
                    />
                ))}
            </div>
        </section>
    )
}