const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

const crearUrlClima = (lat, lon) =>
    `${FORECAST_URL}?latitude=${lat}&longitude=${lon}` +
    `&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation` +
    `&daily=temperature_2m_max,temperature_2m_min,precipitation_sum` +
    `&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation` +
    `&timezone=auto`; // importante para que las fechas sean locales.[web:58]

export async function getWeatherByCity(nombreCiudad) {
    // 1. Geocoding optener lat, lon
    const urlGeo = `${GEO_URL}?name=${encodeURIComponent(nombreCiudad)}&count=1&language=es&format=json`;
    const respGeo = await fetch(urlGeo);
    if (!respGeo.ok) throw new Error(`Error geocoding: ${respGeo.status}`);
    const dataGeo = await respGeo.json();
    const c = dataGeo.results?.[0];
    if (!c) throw new Error("No se encontró la ciudad");

    // 2. Forecast
    const urlClima = crearUrlClima(c.latitude, c.longitude);
    const respClima = await fetch(urlClima);
    if (!respClima.ok) throw new Error(`Error HTTP: ${respClima.status}`);
    const dataClima = await respClima.json();
    function formatearHora(isoString) {
        const fecha = new Date(isoString);
        return fecha.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
    }
    const hourly = {
        time: dataClima.hourly.time.slice(0, 8).map(formatearHora),
        temperature_2m: dataClima.hourly.temperature_2m.slice(0, 8),
        relative_humidity_2m: dataClima.hourly.relative_humidity_2m.slice(0, 8),
        wind_speed_10m: dataClima.hourly.wind_speed_10m.slice(0, 8),
        precipitation: dataClima.hourly.precipitation.slice(0, 8),
    };

    // 3. Devolver ya organizado para tu UI
    return {
        ciudad: {
            nombre: c.name,
            pais: c.country,
            lat: c.latitude,
            lon: c.longitude,
        },
        actual: {
            temp: dataClima.current.temperature_2m,
            feelsLike: dataClima.current.apparent_temperature,
            humidity: dataClima.current.relative_humidity_2m,
            wind: dataClima.current.wind_speed_10m,
            precipitation: dataClima.current.precipitation,
            time: dataClima.current.time,
        },
        daily: dataClima.daily, // daily forecast (fechas + max/min + precipitación).[web:58]
        hourly, // hourly forecast.[web:58]
    };
}
// async function main() {
//     try {
//         const res = await getWeatherByCity("apartado");
//         console.log("Ciudad:", res.ciudad);
//         console.log("Actual:", res.actual);
//         console.log("Daily:", res.daily);
//         console.log("Hourly:", res.hourly);
//     } catch (e) {
//         console.error(e);
//     }
// }

// main();
