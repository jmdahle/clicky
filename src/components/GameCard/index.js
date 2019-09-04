import React from 'react';
import './style.css';

class GameCard extends React.Component {
    state = {
        beenClicked: false
    }

    handleClick() {
        // if beenClicked, you lose
        this.state.beenClicked ? console.log('game over') : console.log('increment score');
        // set beenClicked to true
        this.setState({ beenClicked: true });
    }

    render () {
        return (
            <div id={this.props.card.key} className='game-card'>
                <img src={this.props.card.imgsrc} alt='' onClick={this.handleClick.bind(this)}/>
            </div>
        );
    }
}

export default GameCard;