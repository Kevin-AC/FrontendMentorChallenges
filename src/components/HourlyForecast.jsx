import { useWeatherContext } from "../context/WeatherContext";
import { useFilterHourly } from "../hooks/useFilterHourly";
import Button from "./Button";
import DaysDropdown from "./DaysDropdown";
import HourlyCard from "./HourlyCard";
import { useState } from "react";

export default function HourlyForecast(){
    const [isSwitchPanelOpen, setIsSwitchPanelOpen]=useState(false)
    const {weather,selectedDay} = useWeatherContext();
  
    const hourly = weather?.hourly;
    const actual = weather?.actual;
    const daily = weather?.daily;
    const horaActual = actual? new Date(actual.time) : null;
    const selectedDate = daily?.time[selectedDay];

    const hoursForSelectedDay = useFilterHourly(hourly,selectedDate,horaActual)
    if (!weather) return;
    const selectedDayName = new Date(daily.time[selectedDay]).toLocaleDateString("en-US", { weekday: "long" })
   
        
    return(
        <section className="lg:w-96 mt-8 bg-Neutral-800 opacity-100 rounded-2xl sm:py-5 sm:px-4 p-6 text-Neutral-0">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-xl">Hourly forecast</h2>
                <Button 
                    text={selectedDayName}
                    Style={"bg-Neutral-600 w-30 h-9"}
                    onClick={()=>setIsSwitchPanelOpen(!isSwitchPanelOpen)}
                
                />
            </div>
            <DaysDropdown
                isOpen={isSwitchPanelOpen}
                onClose={()=>setIsSwitchPanelOpen(false)}
            />
            <div className="flex flex-col gap-4 mt-6 lg:mt-4 ">
                {hoursForSelectedDay.map((hour)=>(
                    <HourlyCard
                        key={hour.time}
                        icon={hour.weathercode}
                        temp={`${Math.round(hour.temperature)}°`}
                        hour={hour.timeFormatted}
                    />
                ))}
            </div>
        </section>
    )
}