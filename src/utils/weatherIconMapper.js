export const getOWMIconCode=(wmoCode)=>{
    const mappingIcons={
        0:"01d",
        1:"02d",
        // Cloudy
        2:"03d",
        3:"04d",
        // 🌫️ Fog & mist
        45: "50d", // Fog
        48: "50d", // Rime fog
        // Drizzle/Rain
        51: "09d", 
        53: "09d",
        55: "09d",
        56: "13d", // Freezing drizzle light
        57: "13d", // Freezing drizzle heavy
        61: "10d", // 🌧️ rain slight → 10d
        63: "10d", // rain moderate
        65: "10d", // rain heavy
        // 🌨️ Freezing rain/sleet
        66: "13d", // Freezing rain light
        67: "13d", // Freezing rain heavy
        80: "09d",  // 🌦️ Rain showers slight → 09d
        81: "09d",  // Rain showers moderate
        82: "09d",  // Rain showers violent
        85: "13d", // Snow showers light
        86: "13d", // Snow showers heavy

        // Thunderstorm
        95: "11d", // ⛈️ thunderstorm → 11d
        96: "11d",
        99: "11d",

        // Snow
        71: "13d", // 🌨️ snow slight → 13d
        73: "13d",
        75: "13d",
        77: "13d", // Snow grains
    };
    return mappingIcons[wmoCode]||"01d";//"01d" icono por defecto
}