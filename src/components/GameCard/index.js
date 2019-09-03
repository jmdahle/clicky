import React from 'react';
import './style.css';

class GameCard extends React.Component {
    constructor() {
        super();
        this.state = {
            isVisible: true
        }
    }

    handleClick() {
        console.log('clicked')
    }
    render() {
        return (
            <div id={this.props.item.key} className='game-card'>
                <img src={this.props.item.imgsrc} alt='' onClick={this.handleClick}/>
            </div>
        );
    }
}

export default GameCard;