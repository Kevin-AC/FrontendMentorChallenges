export default function DropButton({text,icon,style,onClick}){
    return(
        <button onClick={onClick} className={`w-49 h-10 flex justify-between items-center gap-2 rounded-md px-2 ${style}`}>
            {icon &&( <img className="order-1" src="assets/images/icon-checkmark.svg" alt="icon-checkmark" />)}
            {text}
        </button>
    )
}