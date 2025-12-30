import ForecastCard from "./ForecastCard";

export default function DailyForecast(){
    return(
        <section className="mt-5">
            <h2 className="font-semibold text-2xl text-Neutral-0 mb-5">Daily forecast</h2>
            <div className="flex flex-wrap gap-4 justify-between">
                <ForecastCard day={"Tue"} icon={"public/assets/images/icon-partly-cloudy.webp"} maxTemp={68} minTemp={57} />
                <ForecastCard day={"Tue"} icon={"public/assets/images/icon-partly-cloudy.webp"} maxTemp={68} minTemp={57} />
                <ForecastCard day={"Tue"} icon={"public/assets/images/icon-partly-cloudy.webp"} maxTemp={68} minTemp={57} />
                <ForecastCard day={"Tue"} icon={"public/assets/images/icon-partly-cloudy.webp"} maxTemp={68} minTemp={57} />
                <ForecastCard day={"Tue"} icon={"public/assets/images/icon-partly-cloudy.webp"} maxTemp={68} minTemp={57} />
                <ForecastCard day={"Tue"} icon={"public/assets/images/icon-partly-cloudy.webp"} maxTemp={68} minTemp={57} />
                <ForecastCard day={"Tue"} icon={"public/assets/images/icon-partly-cloudy.webp"} maxTemp={68} minTemp={57} />
               
            </div>
        </section>
    )
}