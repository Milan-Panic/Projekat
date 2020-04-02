import React from 'react'

const Player = (props) => {
    let {player} = props;
    return (
        <div className="player">   
            <p>Games played: {player.games_played}</p>
            <p>Points: {player.pts}</p>
            <p>Blocks: {player.blk}</p>
            <p>Assist: {player.ast}</p>
            <p>Rebounds: {player.reb}</p>
            <p>Steals: {player.stl}</p>
        </div>
    )
    
}
export default Player