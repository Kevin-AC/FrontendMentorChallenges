export default function ForecastCard({icon,day,minTemp,maxTemp}){
    return(
        <div className="w-24 h-40 py-2.5 px-4 bg-Neutral-800 opacity-100 rounded-[12px] text-center font-[DMSans] font-medium ">
            <p className="text-Neutral-0 mb-4">{day}</p>
            <img className="mb-4" src={icon} alt="Weather icon" />
            <div className="flex items-center justify-between">
                <p className="text-Neutral-0 ">{maxTemp}</p>
                <p className="text-Neutral-200">{minTemp}</p>
            </div>
        </div>
    )
}