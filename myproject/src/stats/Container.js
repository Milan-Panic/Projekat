import React, {Component} from 'react'
import { getPlayerId, getPlayerStats } from './StatsService'

class Container extends Component {
    constructor(props){
        super(props)
        this.state={
            playerName: null,
            playerStats: {}
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        getPlayerId(this.state.playerName)
        this.setState({playerStats: getPlayerStats()})
    }
    
    handleChange = (event) => {
        const replace = event.target.value.split(" ").join("_");
        if(replace.length > 0){
            this.setState({playerName: replace})
        }else {
            alert("Please type players name!")
        }
    }

    componentDidMount(){
        getPlayerId()
        getPlayerStats()
    }

    render(){
        return (
            <div className="stats">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input 
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Please enter players name!"/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                games played: {this.state.playerStats["games_played"]}
                <br/>
                points averaged: {this.state.playerStats["pts"]}
                <br/>
                rebounds averaged: {this.state.playerStats["reb"]}
                <br/>
                assists played: {this.state.playerStats["ast"]}
            </div>
        )
    }
}

export default Container;