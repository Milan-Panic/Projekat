import React from 'react'
import { Link } from 'react-router-dom'

const Team = (props)=>{
    const {team}=props;

return (<div><Link to={`/team/${team.id}`}><div className={team.conference}>{team.full_name} {team.likes}</div></Link>
        <button onClick={()=>{props.like(team.id)}}>Like</button><button onClick={()=>{props.dislike(team.id)}}>Dislike</button>
</div>)
}

export default Team;