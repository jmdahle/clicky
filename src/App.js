import React from 'react';
// import './App.css';
import Score from './components/Score';
import GameBoard from './components/GameBoard';

class App extends React.Component {
  

  render() {

    return (
      <div>
        Hello world!
        <Score />
        <GameBoard />
      </div>
    );
  }
}



export default App;
