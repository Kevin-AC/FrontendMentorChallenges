import UnitsDropdown from "./UnitsDropdown";

export default function SwitchPanel({isOpen,onClose,isImperial,onSwitchUnits}){
    
    if(!isOpen) return null
    return(
        <section className="z-10  absolute right-3.5 top-15 w-53 h-auto px-2 py-1.5 flex flex-col gap-2 text-Neutral-0 bg-Neutral-800 rounded-xl border border-Neutral-600">
            <button 
                className="w-49 h-10 text-left px-2 border border-Neutral-600 rounded-sm"
                onClick={()=>{onSwitchUnits(),onClose()}}>Switch to {isImperial ? "Metric" : "Imperial"}
            </button>
            <div className="divide-y divide-Neutral-600 space-y-2">
                <UnitsDropdown
                    unitTitle="Temperature"
                    unit1="Celsius (°C)"
                    unit2="Fahrenheit (°F)"
                    isImperial={isImperial}
                />
                <UnitsDropdown 
                    unitTitle={"Wind Speed"} 
                    unit1={"km/h"}
                    unit2={"mph"} 
                    isImperial={isImperial}
                />
                <UnitsDropdown 
                    unitTitle={"Precipitation"} 
                    unit1={"Millimeters (mm)"}
                    unit2={"Inches (in)"} 
                    isImperial={isImperial}
                    
                />
            </div>
           

        </section>
    )
}
