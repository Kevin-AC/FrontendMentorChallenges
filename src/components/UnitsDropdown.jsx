import DropButton from "./DropButton";
export default function UnitsDropdown({unitTitle}){
    return(
        <div className="flex flex-col gap-2 pb-3 border-b border-Neutral-600">
            <p className="px-2 text-Neutral-300 font-medium">{unitTitle}</p>
            <DropButton text={"Celsius (°C)"}/>
            <DropButton text={"Fahrenheit (°F)"} />
        </div>
    )
}