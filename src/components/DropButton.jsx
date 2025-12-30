export default function DropButton({text}){
    return(
        <button className="w-49 h-10 flex justify-between items-center gap-2 bg-Neutral-600 rounded-md px-2  ">
            <img className="order-1" src="assets/images/icon-checkmark.svg" alt="icon-checkmark" />
            {text}
        </button>
    )
}