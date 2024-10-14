import React, { useState } from 'react';
import './styles/App.css';
import CardGrid from './components/CardGrid'; 

function App() {

  const [score,setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleScoreCHange  = (card) =>{
    setScore(prevScore => prevScore +1 );

    if(score+1>bestScore){
      setBestScore(score+1);
    }
  };



  return (
    <div className="App">
      <header className='App-header'>
        <h1>Gif Memory Game</h1>
        
        <div>
          <p>Current Score : {score}</p>

          <p>Best Score : {bestScore}</p>          
        </div>
    </header>

    <CardGrid onScoreChange = {handleScoreCHange} />
    </div>
  );
}

export default App;
