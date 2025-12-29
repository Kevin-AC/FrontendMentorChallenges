
export default function Button({iconSrc,text,dropIcon}){
    return(
        <button className="flex flex-row-reverse items-center justify-between gap-1 rounded-[6px] p-2 font-[DMSans] font-medium text-Neutral-0 bg-Neutral-800 opacity-100 w-24 h-9">
            <img className="w-3 " src="assets/images/icon-dropdown.svg" alt="DropIcon"/>
             {text} 
            {iconSrc && <img className="w-4" src={iconSrc} alt="Units" />}
            </button>
    )
}