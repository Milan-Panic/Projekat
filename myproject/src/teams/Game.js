import React from 'react'
import './style/game.css'

const Game = (props)=>{
    const {game}=props;
//console.log(new Date(game.date).getMonth());
const months = ['Jan', 'Feb', 'Mart', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec']
let month = new Date(game.date).getMonth()

return (<div className={game.home_team_score > game.visitor_team_score ? game.home_team.abbreviation : game.visitor_team.abbreviation}>
    <p>
    {game.home_team_score > game.visitor_team_score ? game.home_team.name : game.visitor_team.name} WINS
    </p>
    <p>{game.home_team.abbreviation}  {game.visitor_team.abbreviation}</p>
    <p>{game.home_team_score} : {game.visitor_team_score}</p>
    <p className="date">{months[month]}</p>
    <p>In: {game.home_team.city}</p>
    </div>)
}

export default Game;