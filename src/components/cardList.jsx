import DataJson from '../data.json';
import Card from './card.jsx';
const cardsData = DataJson.map(card => ({
    logo: card.logo,
    name: card.name,
    description: card.description,
    isActive: card.isActive
})) ;


function CardList(){
    return(
        <div className='w-full  lg:w-2/3 flex flex-wrap gap-4 justify-center lg:justify-between'>
            {cardsData.map((card, index) => (
                <div key={index} >
                    <Card 
                        img={card.logo} 
                        title={card.name} 
                        description={card.description} 
                        isActive={card.isActive}
                    />
                </div>
            ))}
        </div>

    );
}
export default CardList;