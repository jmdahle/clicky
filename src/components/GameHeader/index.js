import React from 'react';
import './style.css'

class GameHeader extends React.Component {
    render () {
        return (
            <div className='gameheader d-flex'>
                {this.props.children}
            </div>
        )
    }
}

export default GameHeader