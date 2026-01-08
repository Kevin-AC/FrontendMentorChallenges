import DropButton from "./DropButton";

export default function DaysDropdown({isOpen}){
    const isSelect=true
    if(isOpen) return null
    return(
        <div className="z-10 absolute right-7.5 lg:right-85 mt-2 w-53 h-auto px-2 py-1.5 flex flex-col gap-2 text-Neutral-0 bg-Neutral-800 rounded-xl border border-Neutral-600">
            <DropButton
                text={"Monday"}
                style={isSelect ? "bg-Neutral-700":""}
            />
            <DropButton
                text={"Tuesday"}
                style={isSelect ? "bg-Neutral-700" : ""}
            />
            <DropButton
                text={"Wednesday"}
                style={isSelect ? "bg-Neutral-700" : ""}
            />
            <DropButton
                text={"Thursday"}
                style={isSelect ? "bg-Neutral-700" : ""}
            />
            <DropButton
                text={"Friday"}
                style={isSelect ? "bg-Neutral-700" : ""}
            />
            <DropButton
                text={"Saturday"}
                style={isSelect ? "bg-Neutral-700" : ""}
            />
            <DropButton
                text={"Sunday"}
                style={isSelect ? "bg-Neutral-700" : ""}
            />
        </div>
    )
}