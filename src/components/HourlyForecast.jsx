import { useWeatherContext } from "../context/WeatherContext";
import Button from "./Button";
import DaysDropdown from "./DaysDropdown";
import HourlyCard from "./HourlyCard";
import { useState } from "react";

export default function HourlyForecast(){
    const [isSwitchPanelOpen, setIsSwitchPanelOpen]=useState(false)
    const {weather,selectedDay} = useWeatherContext();
    if (!weather)return;
    const { hourly,daily,actual }=weather
    const selectedDayName = new Date(daily.time[selectedDay]).toLocaleDateString("en-US",{weekday:"long"})
    const selectedDate = daily.time[selectedDay];
    

    const horaActual = new Date(actual.time);
    const horaActualNum = horaActual.getHours();

    const hoursForSelectedDay = hourly.time.map((hora,i)=>{
        const date = new Date(hora);
        if(isNaN(date.getTime())){
            console.error("Fecha inválida:", hora);
            return null;
        }return{
            time: hora,
            timeFormatted: hourly.timeFormatted[i],
            weathercode: hourly.weathercode[i],
            temperature: hourly.temperature_2m[i],
            date:date }
    }).filter(hour => hour !== null && hour.time.startsWith(selectedDate)).sort((a, b) => {
        const horaA = a.date.getHours();
        const horaB = b.date.getHours();
        // Si la hora es menor a la actual, suma 24 para ponerla al final
        const ajusteA = horaA < horaActualNum ? horaA + 24 : horaA;
        const ajusteB = horaB < horaActualNum ? horaB + 24 : horaB;
        return ajusteA - ajusteB;
    }).slice(0, 8);

        
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