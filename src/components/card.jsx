import Button from "./button";

function Card({title, description,img,isActive}){
    return(
        <div className="w-full border border-Neutral-300 rounded-2xl bg-Neutral-800 p-3 text-Neutral-0">
            <section className="flex items-start gap-3">
                <img src={img} alt="logo de servicios" />
                <div>
                    <h2 className="font-bold">{title}</h2>
                    <p className="text-Neutral-200 font-extralight">{description}</p>
                </div>
            </section>
            <section className="flex justify-between items-center pt-4">
                <Button title={"Remove"} className={'h-8 w-20'}/>
                <input type="checkbox" defaultChecked={isActive} className="toggle toggle-sm border-0 checked:bg-Red-400" />
            </section>
            

        </div>
    );
}
export default Card;