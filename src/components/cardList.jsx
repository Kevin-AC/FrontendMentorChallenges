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
        <div>
            {cardsData.map((card, index) => (
                <div key={index} className='sm:w-80 mb-3'>
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