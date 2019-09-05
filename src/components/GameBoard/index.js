import React from 'react';
import GameCard from '../GameCard';
import Wrapper from '../Wrapper';
import Score from '../Score';
import GameOverDialog from '../GameOverDialog';
import GameInstructions from '../GameInstructions';
import GameHeader from '../GameHeader';
import gameCards from '../../gameCards.json';

class GameBoard extends React.Component {
    state = {
        cardArray: [],
        cardsClicked: [],
        suspendGame: 1, // 0=active; 1=suspended (cannot click cards)
        instructions: 1, //0=hide instructions; 1=show instructions
        score: 0,
        hiscore: 0,
        gameover: 0 // 0=in progress; 1=game over
    }

    shuffle = array => {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        this.setState( { cardArray: array });
    }

    clickCard = (id) => {
        // if game is supended, don't register the click
        let isSuspended = this.state.suspendGame;
        if (isSuspended === 0) {
            // check if that ID has been clicked
            // if yes, end the game; if no, score a point
            let newCardsClicked = this.state.cardsClicked;
            newCardsClicked.indexOf(id) > -1 ? this.endGame() : this.scorePoint(id)
            // add the card to the cards clicked array
            newCardsClicked.push(id);
            this.setState( { cardsClicked: newCardsClicked })
        }
    }

    endGame = () => {
        this.setState( { gameover: 1, suspendGame: 1 } );
    }

    showInstructions = () => {
        this.setState( { instructions: 1, suspendGame: 1 } );
    }
    exitInstructions = () => {
        this.setState( { instructions: 0, suspendGame: 0 } );
    }

    scorePoint = (id) => {
        // add a point to the score
        let currentScore = this.state.score + 1;
        this.setState( { score: currentScore});
        // re-set hiscore if score > hiscore
        if (currentScore > this.state.hiscore) {
            this.setState( { hiscore: currentScore } );
        }
        // and shuffle the cards
        this.shuffle(gameCards);
    }

    componentDidMount = () => {
        this.shuffle(gameCards);
    }
    
    restartGame = () => {
        // re-set to beginning state (except cards and hiscore)
        this.setState( {
            cardsClicked: [],
            score: 0,
            gameover: 0,
            instructions: 0,
            suspendGame: 0
        });
        // re-shuffle
        this.shuffle(gameCards);
    }

    render() {     
        return (
            <div className='gameboard'>
            <Wrapper>
                <GameOverDialog 
                    gameover={this.state.gameover} 
                    restartGame={this.restartGame}
                    score={this.state.score}
                />
                <GameHeader> 
                    <Score
                        score={this.state.score}
                        hiscore={this.state.hiscore}
                    />
                    <GameInstructions 
                        instructions={this.state.instructions}
                        exitInstructions={this.exitInstructions}
                        showInstructions={this.showInstructions}
                    />
                </GameHeader>
                {this.state.cardArray.map( card => (
                    <GameCard 
                        id={card.id}
                        key={card.id} 
                        imgsrc={card.imgsrc}
                        clickCard={this.clickCard}
                    /> 
                ))}
            </Wrapper>
            </div>
        )
    }
}

export default GameBoard;