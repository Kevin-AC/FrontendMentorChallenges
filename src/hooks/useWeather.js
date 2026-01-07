// src/hooks/useMockWeather.js
import { useEffect, useState } from "react";
//import { getWeatherMock } from "../api/mock_api";
import { getWeatherByCity } from "../api/getWeatherByCity";
export function useWeather(city) {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
       
        if(!city)return;
        console.log(city)
        async function load() {
            try {
                console.log("await")
                const data = await getWeatherByCity(city) // reutilizar servicio getWeatherMock(); //
                console.log(data)
                setWeather(data);
            } catch (e) {
                console.error(e);
            }
        }
        load();
    }, [city]);

    return weather;
}
