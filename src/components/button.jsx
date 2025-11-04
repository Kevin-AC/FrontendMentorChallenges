function Button({title, className}) {
    return(
        <button className={` m-0 p-0 grid place-content-center bg-Neutral-800 hover:bg-Red-500 hover:text-Neutral-900 text-white px-4 py-2 rounded-3xl border border-Neutral-600 transition ${className}`}>
            {title} 
        </button>
    );
}
export default Button;