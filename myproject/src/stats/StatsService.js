import React from 'react'
import axios from 'axios'

export const url = 'https://www.balldontlie.io/api/v1/players'
export const url2 = 'https://www.balldontlie.io/api/v1/season_averages'

export const getPlayerId = (name) => {
    axios.get(`${url}?search=${name}`)
    .then(async res => {
        console.log(res.data.data);    
        if(res.data.data[0] === undefined) {
            alert("This player is either injured or hasn't played yet")
        }else if(res.data.data > 1){
            alert("Please specify the name more!")
        } else{
            await getPlayerStats(res.data.data[0].id)
        }   
    }).catch(err => {
        console.log(err);
        
    })     
}

export const getPlayerStats = (playerId) => {
    axios.get(`${url2}?season=2019&player_ids[]=${playerId}`)
    .then(async res => {
        console.log(res.data.data); 
        let player = res.data.data[0]; //OVDE JE PROBLEM
        return player;      
    }).catch(er=>{
        console.log(er);       
    })
}