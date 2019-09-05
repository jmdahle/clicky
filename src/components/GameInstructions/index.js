import React from 'react';
import './style.css';

class GameInstructions extends React.Component {
    render () {
        if (this.props.instructions === 1) {
            return (
                <div className='instructions'>
                    <h3>How to Play the Clicky Game:</h3>
                    <p>To score points, click any image card you have not clicked.  After every click, the image cards will shuffle to add some difficulty.  If you click an image card you have already selected, the game will end.</p>
                    <p>Click 'Exit Instructions' return to the game.</p>
                    <button 
                        type='button' 
                        className='btn btn-primary'
                        onClick={() => this.props.exitInstructions()}
                    >Exit Instructions</button>
                </div>
            );
        } else {
            return (
                <span className='ml-auto openinst'>
                        <a href='#top' onClick={this.props.showInstructions}>Instructions</a>
                </span>
            )
        }
    }
}

export default GameInstructions;