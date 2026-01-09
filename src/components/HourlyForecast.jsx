import { useWeatherContext } from "../context/WeatherContext";
import Button from "./Button";
import DaysDropdown from "./DaysDropdown";
import HourlyCard from "./HourlyCard";
import { useState } from "react";
export default function HourlyForecast(){
    const [isSwitchPanelOpen, setIsSwitchPanelOpen]=useState(true)
    const {weather} = useWeatherContext();
    if (!weather)return;
    const { hourly,actual }=weather
    return(
        <section className="lg:w-96 mt-8 bg-Neutral-800 opacity-100 rounded-2xl sm:py-5 sm:px-4 p-6 text-Neutral-0">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-xl">Hourly forecast</h2>
                <Button 
                    text={
                        new Date(actual.time).toLocaleDateString("en-US", {
                            weekday:"long",
                        })
                    }
                    Style={"bg-Neutral-600 w-30 h-9"}
                    onClick={()=>setIsSwitchPanelOpen(!isSwitchPanelOpen)}
                
                />
            </div>
            <DaysDropdown
                isOpen={isSwitchPanelOpen}
            />
            <div className="flex flex-col gap-4 mt-6 lg:mt-4">
                {hourly.time.map((hora,i)=>(
                    <HourlyCard 
                        key={hora}
                        icon={hourly.weathercode[i]}
                        temp={`${Math.round(hourly.temperature_2m[i])}°`}
                        hour={hourly.time[i]}
                    />
                ))}
            </div>
        </section>
    )
}