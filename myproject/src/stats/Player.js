import React from 'react'

const Player = (props) => {
    let {player} = props;
    return (
        <div className="player">
            <p>{player.games_played}</p>
            <p>{player.pts}</p>
            <p>{player.pts}</p>
            <p>{player.ast}</p>
        </div>
    )
    
}
export default Player