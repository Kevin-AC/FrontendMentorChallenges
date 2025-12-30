export default function WeatherDetailCard({value,text}){
    return(
        <div className="bg-Neutral-800 opacity-100 w-40.5 h-29.5 rounded-2xl p-5">
            <p className="text-Neutral-200 font-medium text-[18px] opacity-100">{text}</p>
            <p className="text-Neutral-0 font-light text-4xl ">{value}</p>

        </div>
    )
}