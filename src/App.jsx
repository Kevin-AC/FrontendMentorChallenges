import Header from "./components/Header"
import Search from "./components/Search"
import WeatherInfo from "./components/WeatherInfo"
import DailyForecast from "./components/DailyForecast"
import HourlyForecast from "./components/HourlyForecast"
import SwitchPanel from "./components/SwitchPanel"
export default function App() {
    return (
        <main className="bg-Neutral-900 w-full h-auto p-4 pb-10">
            <Header/>
            <SwitchPanel/>
            <h1 className="text-Neutral-0 font-bold text-5xl tracking-widest text-center py-12 font-[BricolageGrotesque] ">How’s the sky looking today?</h1>
            <Search/>
            <WeatherInfo/>
            <DailyForecast/>
            <HourlyForecast/>    
        </main>
    )
}
