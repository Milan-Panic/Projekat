import React, {Component} from 'react'
import axios from 'axios'
import Prikaz from './Prikaz'
import { isLogin } from '../auth/services'
import { Redirect } from 'react-router-dom'
import Header from '../auth/public/components/Header'



class Container extends Component {
    constructor(props){
        super(props)
        this.state={
            playerName: null,
            playerId: '',
            playerOneSt: {},
            player2Name: null,
            player2Id: '',
            playerTwoSt: {},
            playerStats: []
        }
    }
    
    getId1 = (name) => {
        axios.get(`https://www.balldontlie.io/api/v1/players?search=${name}`)
        .then(resu => {
            if(resu.data.data[0] === undefined) {
                alert("This player is either injured or hasn't played yet")
            }else if(resu.data.data > 1){
                alert("Please specify the name more!")
            } else{
                this.setState({playerId: resu.data.data[0].id})
                    }
        })
    }
    getId2 = (name) => {
        axios.get(`https://www.balldontlie.io/api/v1/players?search=${name}`)
        .then(resu => {
            if(resu.data.data[0] === undefined) {
                alert("This player is either injured or hasn't played yet")
            }else if(resu.data.data > 1){
                alert("Please specify the name more!")
            } else{
                this.setState({player2Id: resu.data.data[0].id})
                    }            
        })
    }
    

    getPlOne = async (playerId1) => {
        const res=await axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerId1}`)
        
            if(res.data.data === undefined) {
                alert("This player is either injured or hasn't played yet")
                return null;
            } else{
                //console.log(res.data.data[0]); 
                return res.data.data[0]   
            } 
        
    }

    getPlTwo = async(playerId2) => {
        const res = await axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerId2}`)
        
            console.log(res.data.data); 
            if(res.data.data === undefined) {
                alert("This player is either injured or hasn't played yet")
                return null;
            } else{
                return res.data.data[0]   
            } 
      
    }

    getPlayerStats = async (playerId1, playerId2) => {
        const player1=await this.getPlOne(playerId1)
        const player2=await this.getPlTwo(playerId2)
        // Promise.All
        this.setState({
            playerStats:[player1,player2]
        });        
    }
    setGlobalState = async() => {
        await this.getPlayerStats(this.state.playerId, this.state.player2Id)        
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setGlobalState()
        // console.log(this.state.playerName);        
        // console.log(this.state.player2Name);
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
    if(isLogin()){
        return (
            <>
            <Header />
            <div className="stats">
                <form className="compare-form form-group" onSubmit={this.handleSubmit}>
                
                        <input 
                        className="form-control"
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Please enter players name!"/>
                    
                    <input id="comp" className="btn btn-success btn-block" type="submit" value="Compare"/>
                        <input 
                        className="form-control"
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChangeD}
                        placeholder="Please enter players name!"/>
                    
                </form>
                <Prikaz stats={this.state.playerStats}/>
            </div>
            </>
        )} else{
            return <Redirect to="/" />
        }
    }
    
    
}
export default Container;