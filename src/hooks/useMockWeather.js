// src/hooks/useMockWeather.js
import { useEffect, useState } from "react";
import { getWeatherMock } from "../api/mock_api";
export function useMockWeather() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        async function load() {
            try {
                const data = await getWeatherMock(); // reutilizar servicio
                setWeather(data);
            } catch (e) {
                console.error(e);
            }
        }
        load();
    }, []);

    return weather;
}
