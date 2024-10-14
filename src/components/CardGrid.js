import React, { useState, useEffect } from 'react';
import Card from './Card';
import { fetchGiphyData } from '../services/apiService';


const CardGrid = ({ onScoreChange }) => {
    const [cards, setCards ] = useState([]);
    const [shuffledCards, setShuffledCards] = useState([])

    useEffect(() => {
        const getData = async () => {
          const data = await fetchGiphyData();
          setCards(data);
          shuffleCards(data);  // Shuffle the cards once the data is fetched
        };
        getData();
      }, []); 
    

    const shuffleCards = (cards) => {
        const shuffled = [...cards].sort(()=> Math.random()-0.5);
        setShuffledCards(shuffled);
        };



    const handleCardClick = (card) => {
        onScoreChange(card);
        shuffleCards(cards);
    };

    return(
        <div className='card-grid'>
            {shuffledCards.map((card,index)=>{
                <Card
                    key={index}
                    name={card.title}
                    image = {card.images.fixed_height.url}
                    onClick={()=>handleCardClick(card)}
                    />
                })}
        

        </div>
    )
}

export default CardGrid