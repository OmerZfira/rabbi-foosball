import React, { Component } from 'react';
import PlayerList from './components/player-list/player-list';
import logo from './logo.png';
import './App.css';

import manualDB from './manualDB';

class App extends Component {
    constructor() {
        super()
        this.state = manualDB
    }

    deletePlayer = (id) =>  {
        let newStatePlayers = this.state.players.slice();
            newStatePlayers.splice(id, 1);
            this.setState({
                players: newStatePlayers
            })
    }
    
    addPlayer = (event) => {
        if (event.key === 'Enter') {
            let newStatePlayers = this.state.players.slice();
            newStatePlayers.push({
                id: (this.state.players.length + 1),
                name: event.target.value
            });
            event.target.value = '';

            this.setState({
                players: newStatePlayers
            })
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Rabbi's Foosball League</h2>
                </div>
                <PlayerList players={this.state.players} onDeletePlayer={this.deletePlayer}/>
                <div className="add-player">
                    <label>Add a new player:<br />
                        <input type="text" placeholder="Enter full name" onKeyUp={this.addPlayer} />
                    </label>
                </div>
            </div>
        );
    }
}

export default App;

console.log('manualDB is: ', manualDB);