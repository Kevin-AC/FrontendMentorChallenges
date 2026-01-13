import { useState } from "react";
import Button from "./Button";
import SwitchPanel from "./SwitchPanel"
import { useWeatherContext } from "../context/WeatherContext";

export default function Header(){
    const {isImperial, setIsImperial} = useWeatherContext();
    const [isSwitchPanelOpen, setIsSwitchPanelOpen]=useState(false);
   
    return(
        <section className="w-full h-9 flex justify-between items-center ">
            <img className="h-9" src="/assets/images/logo.svg" alt="WeatherLogo" />
            <Button
                iconSrc="assets/images/icon-units.svg"
                text="Units"
                Style={"bg-Neutral-800 w-23 md:w-30 h-8.5 md:h-11 focus:ring-2 focus:ring-Neutral-0  focus:ring-offset-3 focus:ring-offset-Neutral-900"}
                onClick={() => setIsSwitchPanelOpen(!isSwitchPanelOpen)}
            />
            <SwitchPanel 
                isOpen={isSwitchPanelOpen}
                onClose={()=> setIsSwitchPanelOpen(false)}
                isImperial={isImperial}
                onSwitchUnits={() => setIsImperial(!isImperial)}
            />
        </section>
    )
}