import React from 'react';
// import './App.css';
import Score from './components/Score';
import GameCard from './components/GameCard';
import gameCards from './gameCards.json';

class App extends React.Component {
  render() {
    const gameCardItems = gameCards.map( item => <GameCard key={item.id} item={item}/> );

    return (
      <div>
        Hello world!
        <Score />
        {gameCardItems}
      </div>
    );
  }
}



export default App;
