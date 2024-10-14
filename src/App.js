import React, { useState } from 'react';
import './styles/App.css';
import CardGrid from './components/CardGrid'; 

function App() {

  const [score,setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [message,setMessage] = useState("");

  const handleScoreCHange  = (card) =>{
    setScore(prevScore => prevScore +1 );

    if(score+1>bestScore){
      setBestScore(score+1);
    }
  };

  const resetScore = () => {
    setScore(0);
    setMessage("You lost")
    setTimeout(setMessage(""),1800);
  };


  return (
    <div className="App">
      <header className='App-header'>
        <h1>Gif Memory Game</h1>
        <p>Your goal here is to click a unique image each time</p>
        <div>
          <p>Current Score : {score}</p>

          <p>Best Score : {bestScore}</p>     
          <p>{message}</p>     
        </div>
    </header>

    <CardGrid onScoreChange = {handleScoreCHange} resetScore={resetScore} />
    </div>
  );
}

export default App;
