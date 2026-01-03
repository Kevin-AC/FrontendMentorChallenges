// src/hooks/useMockWeather.js
import { useEffect, useState } from "react";
import { getWeatherMock } from "../api/mock_api";
import { getWeatherByCity } from "../api/getWeatherByCity";
export function useWeather() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        console.log("useWeather montado")
        async function load() {
            try {
                
                const data = await getWeatherByCity('bogota') // reutilizar servicio getWeatherMock(); //
               
                setWeather(data);
            } catch (e) {
                console.error(e);
            }
        }
        load();
    }, []);

    return weather;
}
