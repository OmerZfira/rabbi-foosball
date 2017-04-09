import React, { Component } from 'react';

class PlayerPrev extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    deletePlayer = (e) => {
        this.props.onDeletePlayer(e);
    }

    render() {
        return (
            <li className="player-name">
                {this.props.player.id}. {this.props.player.name} 
                <a 
                    onClick={() => {this.deletePlayer(this.props.index)}}
                    className="delete-player" 
                    > X
                </a>
            </li>
        );
    }
}

export default PlayerPrev;