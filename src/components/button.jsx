function Button({title, className}) {
    return(
        <button className={`grid place-content-center cursor-pointer focus bg-neutral-100 dark:bg-Neutral-800 hover:text-Neutral-100 hover:bg-Red-500 dark:hover:text-Neutral-900 text-[20px] text-Neutral-900 dark:text-white px-4 py-2 rounded-3xl border border-Neutral-200 dark:border-Neutral-700 transition ${className}`}>
            {title} 
        </button>
    );
}
export default Button;