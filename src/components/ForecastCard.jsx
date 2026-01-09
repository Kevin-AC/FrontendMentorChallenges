import { WeatherIcon } from "./WeatherIcon";

export default function ForecastCard({icon,day,minTemp,maxTemp}){
    return(
        <div className="w-25.5 h-40 py-2.5 px-4 bg-Neutral-800 opacity-100 rounded-xl text-center font-medium ">
            <p className="text-Neutral-0 mb-4">{day}</p>
            <WeatherIcon weathercode={icon} size="w-18 h-18" />
            <div className="flex items-center justify-between">
                <p className="text-Neutral-0 ">{maxTemp}</p>
                <p className="text-Neutral-200">{minTemp}</p>
            </div>
        </div>
    )
}