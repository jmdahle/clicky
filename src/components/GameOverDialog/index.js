import React from 'react';
import './style.css';

class GameOverDialog extends React.Component {
    render () {
        if (this.props.gameover === 1) {
            return (
                <div className='gameover'>
                    <h3>Game Over!</h3>
                    <p>Your final score was {this.props.score}.</p>
                    <p>Click 'Restart' button to start a new game.</p>
                    <button 
                        type='button' 
                        className='btn btn-primary'
                        onClick={() => this.props.restartGame()}
                    >Restart</button>
                </div>
        );
        } else {
            return (
                <span> </span>
            )
        }
    }
}

export default GameOverDialog;