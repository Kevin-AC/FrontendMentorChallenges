export const getOWMIconCode=(wmoCode)=>{
    const mappingIcons={
        0:"01d",
        1:"02d",
        // Cloudy
        2:"03d",
        3:"04d",
        // Drizzle/Rain
        51: "09d", 
        53: "09d",
        55: "09d",
        61: "10d", // 🌧️ rain slight → 10d
        63: "10d", // rain moderate
        65: "10d", // rain heavy

        // Thunderstorm
        95: "11d", // ⛈️ thunderstorm → 11d
        96: "11d",
        99: "11d",

        // Snow
        71: "13d", // 🌨️ snow slight → 13d
        73: "13d",
        75: "13d",

        // Fog
        45: "50d", // 🌫️ fog → 50d
        48: "50d"
    };
    return mappingIcons(wmoCode)||"01d";//"01d" icono por defecto
}