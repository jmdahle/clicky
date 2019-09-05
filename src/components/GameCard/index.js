import React from 'react';
import './style.css';

class GameCard extends React.Component {
    render () {
        return (
            <div className='game-card'>
                <img 
                    src={this.props.imgsrc} 
                    alt='' 
                    onClick={() => this.props.clickCard(this.props.id)}
                />
            </div>
        );
    }
}

export default GameCard;