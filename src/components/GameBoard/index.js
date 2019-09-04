import React from 'react';
import GameCard from '../GameCard';
import gameCards from '../../gameCards.json';

class GameBoard extends React.Component {
    state = {
        cardArray: []
    }

    shuffle = array => {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
    }
    
    componentDidMount = () => {
        let shuffledCards = this.shuffle(gameCards);
        this.setState( { cardArray: shuffledCards } )
        console.log('shuffled')
    }
    
    render() {
       
        return (
            this.state.cardArray.map( card => <GameCard key={card.id} card={card}/> )
        )
    }
}

export default GameBoard;