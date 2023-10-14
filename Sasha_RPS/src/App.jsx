import { useState } from 'react'
import './App.css'

const score = 0;
const win_lose = '';

const PLAYER_CHOICE = [
  {
      id: 'p1',
      title: 'rock',
  },
  {
      id: 'p2',
      title: 'paper',
  },
  {
      id: 'p3',
      title: 'scissors',
  }
];

const HOUSE_CHOICE = [
  {
      id: 'h1',
      title: 'rock',
  },
  {
      id: 'h2',
      title: 'paper',
  },
  {
      id: 'h3',
      title: 'scissors',
  }
];

function Choice() {
  if (PLAYER_CHOICE.id === "p2" && HOUSE_CHOICE.id === "h1") {
    score ++;
    win_lose = 'You win';
  }
  else if (PLAYER_CHOICE.id === "p3" && HOUSE_CHOICE.id === "h1") {
    win_lose = 'You lose';
  }
  else if (PLAYER_CHOICE.id === "p1" && HOUSE_CHOICE.id === "h2") {
    win_lose = 'You lose';
  }
  else if (PLAYER_CHOICE.id === "p3" && HOUSE_CHOICE.id === "h2") {
    score ++;
    win_lose = 'You win';
  }
  else if (PLAYER_CHOICE.id === "p1" && HOUSE_CHOICE.id === "h3") {
    score ++;
    win_lose = 'You win';
  }
  else if (PLAYER_CHOICE.id === "p2" && HOUSE_CHOICE.id === "h3") {
    win_lose = 'You lose';
  }
  else {
    win_lose = 'You tied';
  }
}

function App() {
return (
    <>
    <div>
      <h2>
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
      </h2>
    </div>
    <div>
      <h3><p>Score:</p></h3>
      <h1><p>score</p></h1>
    </div>
    <div>
      <button>Rock</button>
      <button>Paper</button>
      <button>Scissors</button>
    </div>
    <div>
    <button>Rules</button>
    </div>
    </>
  )
}

export default App