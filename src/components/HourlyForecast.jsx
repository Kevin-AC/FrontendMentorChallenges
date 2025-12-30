import Button from "./Button";
import HourlyCard from "./HourlyCard";

export default function HourlyForecast(){
    return(
        <section className="mt-8 bg-Neutral-800 opacity-100 rounded-2xl py-5 px-4 text-Neutral-0">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-xl">Hourly forecast</h2>
                <Button text={"Tuesday"} Style={"bg-Neutral-600"}/>
            </div>
            <div className="flex flex-col gap-4 mt-6">
                <HourlyCard hour={"3 PM"} temp={68} icon={"public/assets/images/icon-rain.webp"} />
                <HourlyCard hour={"3 PM"} temp={68} icon={"public/assets/images/icon-rain.webp"} />
                <HourlyCard hour={"3 PM"} temp={68} icon={"public/assets/images/icon-rain.webp"} />
                <HourlyCard hour={"3 PM"} temp={68} icon={"public/assets/images/icon-rain.webp"} />
                <HourlyCard hour={"3 PM"} temp={68} icon={"public/assets/images/icon-rain.webp"} />
                <HourlyCard hour={"3 PM"} temp={68} icon={"public/assets/images/icon-rain.webp"} />
            </div>
        </section>
    )
}