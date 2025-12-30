
import UnitsDropdown from "./UnitsDropdown";

export default function SwitchPanel(){
    return(
        <section className="z-10 absolute right-0 mt-3 w-53 h-auto px-2 py-1.5 flex flex-col gap-2 text-Neutral-0 bg-Neutral-800 rounded-xl border border-Neutral-600">
            <h2 className="font-medium px-2 py-2.5">Switch to Imperial</h2>
            <UnitsDropdown unitTitle={"Temperature"}/>
            <UnitsDropdown unitTitle={"Wind Speed"}/>
            <UnitsDropdown unitTitle={"Precipitation"}/>
           

        </section>
    )
}
