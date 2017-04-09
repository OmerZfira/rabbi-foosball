import React, { Component } from 'react';
import PlayerPrev from '../player-prev/player-prev';

class PlayerList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    deletePlayer = (id) => {
        this.props.onDeletePlayer(id);
    }

    componentDidMount() {
    }

    componentWillUpdate(nextProps, nextState) {
    }

    render() {
        return (
            <ul className="player-list clean-list">
                {this.props.players.map((player, index) =>
                    <PlayerPrev player={player} index={index} key={`player-${player.id}`} onDeletePlayer={this.deletePlayer}/>)}
            </ul>
        );
    }
}

export default PlayerList;