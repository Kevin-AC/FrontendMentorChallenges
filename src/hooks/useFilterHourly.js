import { useMemo } from "react";

export function useFilterHourly(hourly, selectedDate, horaActual){
    return useMemo(()=>{
        if(!hourly || !horaActual || !selectedDate)return[];
        const horaActualNum = horaActual.getHours();
        return hourly.time.map((hora,i)=>{
            const date = new Date(hora);
            if(isNaN(date.getTime())){
                console.error("Fecha inválida:", hora);
                return null;
            }return{
                time: hora,
                timeFormatted: hourly.timeFormatted[i],
                weathercode: hourly.weathercode[i],
                temperature: hourly.temperature_2m[i],
                date: date
            };
        }).filter(hour => hour !== null && hour.time.startsWith(selectedDate)).sort((a, b) => {
            const horaA = a.date.getHours();
            const horaB = b.date.getHours();
            // Si la hora es menor a la actual, suma 24 para ponerla al final
            const ajusteA = horaA < horaActualNum ? horaA + 24 : horaA;
            const ajusteB = horaB < horaActualNum ? horaB + 24 : horaB;
            return ajusteA - ajusteB;
        }).slice(0, 8);

    },[hourly,selectedDate,horaActual])
}
