import React from 'react';
import './style.css';

class Score extends React.Component {
    state = {
        score: 0,
        hiscore: 0
    }

    render() {
        return(
            <div className='score'>
                Score: {this.state.score}| Hi Score: {this.state.hiscore}
            </div>
        );
    }
}

export default Score;