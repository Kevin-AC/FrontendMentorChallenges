export async function getWeatherMock() {
    const resp = await fetch('public/assets/mock-weather.json')
    if (!resp.ok) throw new Error(`Error de Mock${resp.status}`);
    const data = await resp.json()
    return data
}