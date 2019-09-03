import React from 'react';
import './style.css';

class Score extends React.Component {
    constructor() {
        super();
        this.state = {
            isVisible: true
        }
    }

    render() {
        return(
            <div className='score'>
                Score: | Hi Score: 
            </div>
        );
    }
}

export default Score;