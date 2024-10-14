import React, { useState, useEffect } from 'react';
import Card from './Card';
import { fetchGiphyData } from '../services/apiService';


const CardGrid = ({ onScoreChange, resetScore }) => {
    const [cards, setCards ] = useState([]);
    const [shuffledCards, setShuffledCards] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);


    useEffect(() => {
        const getData = async () => {
          const data = await fetchGiphyData();
          setCards(data);
          shuffleCards(data); 
        };
        getData();
      }, []); 
    

    const shuffleCards = (cards) => {
        const shuffled = [...cards].sort(()=> Math.random()-0.5);
        setShuffledCards(shuffled);
        };



    const handleCardClick = (card) => {
        if(clickedCards.includes(card.id)) {
            resetScore();
            setClickedCards([]);
        }    
        else {
            onScoreChange(card);
            setClickedCards((prevClickedCards) => [...prevClickedCards, card.id]); 

        }
       
        shuffleCards(cards);
    };

    return (
        <div className="card-grid">
            {shuffledCards.map((card, index) => (
                <Card
                    key={index}
                    name={card.title}
                    image={card.images.fixed_height.url}
                    onClick={() => handleCardClick(card)}
                />
            ))}
        </div>
    );

};

export default CardGrid;