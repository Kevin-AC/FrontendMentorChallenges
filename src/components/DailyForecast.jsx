import ForecastCard from "./ForecastCard";

export default function DailyForecast(){
    return(
        <section>
            <h2>Daily forecast</h2>
            <div>
                <ForecastCard/>
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
            </div>
        </section>
    )
}