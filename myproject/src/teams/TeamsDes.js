import React, { useState, useEffect } from 'react'
import { isLogin } from '../auth/services'
import { Redirect, useParams } from 'react-router-dom'
import { getGames } from './nbaServices'
import Game from './Game'

const TeamsDes = () => {
    let {id} = useParams();
     const [games,setGM] = useState([])
    
    const setGames = async () => {
        let data = await getGames(id)
        setGM(data)
    }
    
    useEffect(()=>{
        setGames()
    },[])
    
    if(isLogin()){
        console.log(games);        
    return(
        <div className="games-con">
           {games.map(game=><Game key={game.id} game={game} />)}
        </div>
    )
    } 
    else{
        return <Redirect to="/" />
    }
}

export default TeamsDes