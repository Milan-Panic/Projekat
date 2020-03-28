import React, {Component} from 'react'
import axios from 'axios'



class Container extends Component {
    constructor(props){
        super(props)
        this.state={
            playerName: null,
            playerStats: {}
        }
    }
    getPlayerId = (name) => {
        axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
        .then(async res => {
            //console.log(res.data.data);    
            if(res.data.data[0] === undefined) {
                alert("This player is either injured or hasn't played yet")
            }else if(res.data.data > 1){
                alert("Please specify the name more!")
            } else{
               await this.getPlayerStats(res.data.data[0].id)
            }   
        }).catch(err => {
            console.log(err);
            
        })     
    }
    getPlayerStats = (playerId) => {
        axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerId}`)
        .then(async res => {
            console.log(res.data.data); 
            if(res.data.data[0] === undefined) {
                alert("This player is either injured or hasn't played yet")
            } else{               
                this.setState({playerStats: res.data.data[0]})   
            } 
        }).catch(er=>{
            console.log(er);       
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getPlayerId()
        console.log(this.state.playerName);        
    }
    
    handleChange = (event) => {
        const replace = event.target.value.split(" ").join("_");
        if(replace.length > 0){
            this.setState({playerName: replace})
        }else {
            alert("Please type players name!")
        }
    }

    // componentDidMount(){
    //     this.getPlayerId()
    //     this.getPlayerStats()
    // }

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