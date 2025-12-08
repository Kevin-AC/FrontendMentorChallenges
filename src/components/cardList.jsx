import Card from './card.jsx';


function CardList({cards,onToggle}){
   
    return(
        <div className='w-full  lg:w-2/3 flex flex-wrap gap-4 justify-center lg:justify-between'>
            {cards.map(card => (
                <div key={card.id} >
                    <Card
                        id={card.id}
                        img={card.logo}
                        title={card.name}
                        description={card.description}
                        isActive={card.isActive}
                        onToggle={()=>onToggle(card.id)}
                    />
                </div>
            ))}
        </div>

    );
}
export default CardList;