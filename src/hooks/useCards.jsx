import { useState,useMemo } from "react";
import DataJson from '../data.json';

export function useCards() {
    const [cardsData, setCardsData] = useState(()=>{
        return DataJson.map((card, index) => ({
            id: `card-${index}`,
            logo: card.logo,
            name: card.name,
            description: card.description,
            isActive: card.isActive || false
        }))
    });
    const [filter, setFilter] = useState('all');

    const filteredCards = useMemo(()=>{
        if(filter === 'all')return cardsData;
        if(filter === 'active') return cardsData.filter(card=> card.isActive);
        if(filter === 'inactive') return cardsData.filter(card=> !card.isActive);
        return cardsData;   
    },[filter,cardsData]);

    const toggleCardActive = (cardId) => {
        setCardsData(prevCards => 
            prevCards.map(card =>
                card.id === cardId ? { ...card, isActive: !card.isActive } : card
            )
        )
    };

    return {toggleCardActive,filteredCards,setFilter};

}