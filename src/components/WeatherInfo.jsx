import WeatherDetailCard from "./WeatherDetailCard";

export default function WeatherInfo(){
    return(
        <section className="w-full h-auto mt-8 flex flex-col gap-4 items-center">
            <div className="w-full h-71.5 py-20 flex flex-col justify-center rounded-3xl bg-no-repeat bg-center bg-cover  bg-[url(assets/images/bg-today-small.svg)] md:bg-[url(assets/images/bg-today-large.svg)] ">
                <div className="text-Neutral-0 text-center">
                    <p className="font-bold text-3xl">Berlin, Germany</p>
                    <p className="font-medium text-[18px] opacity-80">Tuesday, Aug 5, 2025</p>
                </div>
                <div className="flex items-center gap-7 ">
                    <img className="w-30 h-30" src="assets/images/icon-sunny.webp" alt="Temperature-Icon" />
                    <p className="font-semibold italic text-[96px] text-Neutral-0">68°</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <WeatherDetailCard value="64" text="Feels Like"/>
                <WeatherDetailCard value="64" text="Feels Like" />
                <WeatherDetailCard value="64" text="Feels Like" />
                <WeatherDetailCard value="64" text="Feels Like" />
            </div>
        </section>
    )
}