import React from 'react'

const Game = (props)=>{
    const {game}=props;

return (<div className={game.home_team_score > game.visitor_team_score ? 'green' : 'red'}>
    <p>
    {game.home_team_score > game.visitor_team_score ? game.home_team.name : game.visitor_team.name} WINS
    </p>
    <p>{game.home_team.abbreviation}  {game.visitor_team.abbreviation}</p>
    <p>{game.home_team_score} : {game.visitor_team_score}</p>
    <p>In: {game.home_team.city}</p>
    </div>)
}

export default Game;