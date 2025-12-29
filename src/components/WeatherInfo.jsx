export default function WeatherInfo(){
    return(
        <section className="w-full h-auto mt-8 font-[DMSans]">
            <div className="w-full h-[286px] py-20 px-6 grid place-content-center rounded-3xl bg-no-repeat bg-center bg-cover  bg-[url(assets/images/bg-today-small.svg)] md:bg-[url(assets/images/bg-today-large.svg)] ">
                <div className="text-Neutral-0 text-center">
                    <p className="font-bold text-3xl">Berlin, Germany</p>
                    <p className="font-medium text-[18px] opacity-80">Tuesday, Aug 5, 2025</p>
                </div>
                <div className="flex gap-7 items-center">
                    <img className="w-[120px] h-[120px]" src="assets/images/icon-sunny.webp" alt="Temperature-Icon" />
                    <p className="font-semibold italic text-[96px] text-Neutral-0">68°</p>
                </div>
            </div>
            
        </section>
    )
}