import Header from "./components/Header"
import Search from "./components/Search"
import WeatherInfo from "./components/WeatherInfo"
import DailyForecast from "./components/DailyForecast"
import HourlyForecast from "./components/HourlyForecast"
import { useWeatherContext } from "./context/WeatherContext";
export default function App() {
    const { weather, hasSearched, isLoading } = useWeatherContext();
    return (
        <main className="bg-Neutral-900 w-full  min-h-screen h-auto  p-4 md:p-6 pb-10 lg:flex lg:flex-col md:items-center">
            <Header/>
            <h1 className="text-Neutral-0 md:px-30 font-bold text-5xl tracking-widest text-center py-12 lg:py-6 font-[BricolageGrotesque]  ">How’s the sky looking today?</h1>
            <div className="lg:w-304">
                <Search />
                {isLoading &&(
                    <p className="text-center text-Neutral-0 text-2xl font-bold py-10">
                        Loading weather...
                    </p>
                )}
                {!isLoading && hasSearched && !weather &&(
                    <p className="text-center text-Neutral-0 text-2xl font-bold py-10">
                        No search result found!
                    </p>
                )}
                {!isLoading && weather &&(
                    <div className="lg:flex gap-8 justify-center">
                        <div className=" lg:w-200 lg:flex lg:flex-col">
                            <WeatherInfo />
                            <DailyForecast />
                        </div>
                        <HourlyForecast />
                    </div> 
                )}  
            </div> 
        </main>
    )
}
