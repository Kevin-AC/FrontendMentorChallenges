
export default function Button({iconSrc,text,Style,onClick}){
    return(
        <button className={`flex flex-row-reverse items-center justify-between gap-1 rounded-md p-2 font-medium text-Neutral-0 opacity-100 w-25 h-9 ${Style}`}
            onClick={onClick}
        >
            
            <img className="w-3 " src="assets/images/icon-dropdown.svg" alt="DropIcon"/>
             {text} 
            {iconSrc && <img className="w-4" src={iconSrc} alt="Units" />}
        </button>
    )
}