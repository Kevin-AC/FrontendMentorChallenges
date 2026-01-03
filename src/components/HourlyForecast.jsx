import Button from "./Button";
import DaysDropdown from "./DaysDropdown";
import HourlyCard from "./HourlyCard";
import { useState } from "react";
import { useMockWeather } from "../hooks/useMockWeather";
export default function HourlyForecast(){
    const [isSwitchPanelOpen, setIsSwitchPanelOpen]=useState(true)
    const weather = useMockWeather()
    if (!weather) return
    const { hourly,actual }=weather
    return(
        <section className="mt-8 bg-Neutral-800 opacity-100 rounded-2xl py-5 px-4 text-Neutral-0">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-xl">Hourly forecast</h2>
                <Button 
                    text={
                        new Date(actual.time).toLocaleDateString("en-US", {
                            weekday:"long",
                        })
                    }
                    Style={"bg-Neutral-600"}
                    onClick={()=>setIsSwitchPanelOpen(!isSwitchPanelOpen)}
                
                />
            </div>
            <DaysDropdown
                isOpen={isSwitchPanelOpen}
            />
            <div className="flex flex-col gap-4 mt-6">
                {hourly.time.map((hora,i)=>(
                    <HourlyCard 
                        key={hora}
                        icon={"public/assets/images/icon-rain.webp"}
                        temp={`${hourly.temperature_2m[i]}°`}
                        hour={hourly.time[i]}
                    />
                ))}
            </div>
        </section>
    )
}