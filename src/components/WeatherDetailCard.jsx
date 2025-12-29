export default function WeatherDetailCard({value,text}){
    return(
        <div className="bg-Neutral-800 opacity-100 w-40 h-[118px] rounded-2xl p-5 font-[DMSans]">
            <p className="text-Neutral-200 font-medium text-[18px] opacity-100">Feels Like</p>
            <p className="text-Neutral-0 font-light text-4xl ">64°</p>

        </div>
    )
}