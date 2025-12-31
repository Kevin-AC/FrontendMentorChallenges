import DropButton from "./DropButton";
import { useState } from "react";
export default function UnitsDropdown({unitTitle,unit1,unit2,isImperial}){
    const activeUnit = isImperial? unit2:unit1;

    return(
        <div className="flex flex-col gap-2 pb-3 ">
            <p className="px-2 text-Neutral-300 font-medium">{unitTitle}</p>
            <DropButton 
                text={unit1}
                icon={!isImperial}
                style={!isImperial ? "bg-Neutral-600 ":""}
            />
            <DropButton 
                text={unit2}
                icon={isImperial}
                style={isImperial ? "bg-Neutral-600 ":""}
            />
        </div>
    )
}