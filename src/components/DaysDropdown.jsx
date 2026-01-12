import DropButton from "./DropButton";
import { useWeatherContext } from "../context/WeatherContext";

export default function DaysDropdown({isOpen,onClose}){
    const {weather,selectedDay,setSelectedDay}=useWeatherContext();
    if(!isOpen||!weather) return null;
    const {daily}=weather;
    return(
        <div className="z-10 absolute right-7.5 lg:right-85 mt-2 w-53 h-auto px-2 py-1.5 flex flex-col gap-2 text-Neutral-0 bg-Neutral-800 rounded-xl border border-Neutral-600">
            {daily.time.map((day,index)=>{
                const date = new Date(day);
                const dayName = date.toLocaleDateString("en-US",{
                    weekday:"long"
                })
                const isSelected = selectedDay === index;
                return(
                    <DropButton
                        key={day}
                        text={`${dayName}`}
                        style={isSelected ? "bg-Neutral-700" : ""}
                        icon={isSelected}
                        onClick={() => {
                            setSelectedDay(index);
                            onClose();
                        }}

                    />
                )
            })}
        </div>
    )
}