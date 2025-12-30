export default function HourlyCard({icon,hour,temp}){
    return(
        <div className="w-full h-16  flex items-center justify-between bg-Neutral-700 border border-Neutral-600 rounded-2xl px-4">
            <div className="flex items-center gap-3">
                <img className="w-10" src={icon} alt="HourlyWeatherIcon" />
                <p>{hour}</p>
            </div>
            <p>{temp}</p>
        </div>
    )
}