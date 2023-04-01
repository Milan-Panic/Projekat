import React from 'react'
import './style/gamesport.css'

const GameSport = (props)=>{
    const {game}=props;
    const date = new Date(game.commence_time);
    const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}. ${date.getHours()}:${date.getMinutes()}`;
    return (
        <>
                <div className='sportGame'>
                    <p>Home team: {game.home_team} VS {game.away_team} :Away team</p>
                    <p>Time of paying: {formattedDate}</p>
                </div>
        </>
    )
}
export default GameSport