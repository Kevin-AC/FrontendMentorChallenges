import { WeatherIcon } from "./WeatherIcon";
export default function HourlyCard({icon,hour,temp}){
    return(
        <div className="w-full h-14.5  flex items-center justify-between bg-Neutral-700 border border-Neutral-600 rounded-2xl px-4">
            <div className="flex items-center gap-3">
                <WeatherIcon weathercode={icon} size="w-15 h-15"/>
                <p>{hour}</p>
            </div>
            <p>{temp}</p>
        </div>
    )
}