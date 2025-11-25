import Button from "./button";

function Card({title, description,img,isActive}){
    return(
        <div className="w-full border border-Neutral-200 dark:border-Neutral-700 rounded-2xl bg-neutral-100 dark:bg-Neutral-800  p-3 text-Neutral-0">
            <section className="flex items-start gap-3">
                <img src={img} alt="logo de servicios" />
                <div>
                    <h2 className="font-bold text-Neutral-900 dark:text-Neutral-100">{title}</h2>
                    <p className="text-Neutral-800 dark:text-Neutral-200 font-extralight">{description}</p>
                </div>
            </section>
            <section className="flex justify-between items-center pt-4">
                <button className=' h-9 grid cursor-pointer place-content-center focus bg-Neutral-100 border-Neutral-200 dark:border-Neutral-700 dark:bg-Neutral-800 hover:bg-Red-500 hover:text-Neutral-100 dark:hover:text-Neutral-900  text-Neutral-900 dark:text-white px-4 py-2 rounded-3xl border '>
                    Remove
                </button>
                <input type="checkbox" defaultChecked={isActive} className="toggle toggle-sm border-0 focus checked:bg-Red-400 bg-Neutral-600" />
            </section>
            

        </div>
    );
}
export default Card;