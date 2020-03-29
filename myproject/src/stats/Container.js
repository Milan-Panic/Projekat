import React, {Component} from 'react'
import axios from 'axios'
import Prikaz from './Prikaz'



class Container extends Component {
    constructor(props){
        super(props)
        this.state={
            playerName: null,
            playerId: '',
            playerStats: [],
            player2Name: null,
            player2Id: ''
        }
    }
    
    getId1 = (name) => {
        axios.get(`https://www.balldontlie.io/api/v1/players?search=${name}`)
        .then(resu => {
            this.setState({playerId: resu.data.data[0].id})
        })
    }
    getId2 = (name) => {
        axios.get(`https://www.balldontlie.io/api/v1/players?search=${name}`)
        .then(resu => {
            this.setState({player2Id: resu.data.data[0].id})
        })
    }
    // getPlayerId = () => {
    //     axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
    //     .then(async res => {
    //         //console.log(res.data.data);    
    //         if(res.data.data[0] === undefined) {
    //             alert("This player is either injured or hasn't played yet")
    //         }else if(res.data.data > 1){
    //             alert("Please specify the name more!")
    //         } else{
    //            await this.getPlayerStats(res.data.data[0].id)
    //         }   
    //     }).catch(err => {
    //         console.log(err);
            
    //     })     
    // }
    getPlayerStats = (playerId, drugi) => {
        axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerId}&player_ids[]=${drugi}`)
        .then(async res => {
            console.log(res.data.data); 
            if(res.data.data === undefined) {
                alert("This player is either injured or hasn't played yet")
            } else{
                this.setState({playerStats: res.data.data})   
            } 
        }).catch(er=>{
            console.log(er);       
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //this.getPlayerId()
        this.getPlayerStats(this.state.playerId, this.state.player2Id)
        console.log(this.state.playerName);        
        console.log(this.state.player2Name);        
    }
    
    handleChange = (event) => {
        const replace = event.target.value.split(" ").join("_");
        if(replace.length > 0){
            this.getId1(replace)
            this.setState({playerName: replace})
        }else {
            alert("Please type players name!")
        }
    }
    handleChangeD = (event) => {
        const replace = event.target.value.split(" ").join("_");
        if(replace.length > 0){
            this.getId2(replace)
            this.setState({player2Name: replace})
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
                        PlayerOne
                        <input 
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Please enter players name!"/>
                    </label>
                    <input type="submit" value="Compare"/>
                    <label>
                        <input 
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChangeD}
                        placeholder="Please enter players name!"/>PlayerTwo
                    </label>
                </form>
                <Prikaz stats={this.state.playerStats}/>
                 {/* {this.state.playerStats["games_played"]}  games played:
                <br/>
                 {this.state.playerStats["pts"]}  points averaged:
                <br/>
                 {this.state.playerStats["reb"]}  rebounds averaged:
                <br/>
                 {this.state.playerStats["ast"]}  assists played: */}
            </div>
        )
    }
    
    
}
export default Container;