import React from 'react';
import './style.css';

class Score extends React.Component {
    render() {
        return(
            <span className='score'>
                Score: {this.props.score}&nbsp;&nbsp;|&nbsp;&nbsp;Hi Score: {this.props.hiscore}
            </span>
        );
    }
}

export default Score;