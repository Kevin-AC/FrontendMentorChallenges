import { getOWMIconCode } from "../utils/weatherIconMapper";

export function WeatherIcon({weathercode,size='w-16 h-16'}){
    const iconCode=getOWMIconCode(weathercode);
    const iconUrl =`https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    return(
        <img src={iconUrl} alt={`weather condicion ${weathercode}`} className={`${size}`}/>
    )
}