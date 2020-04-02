import React from 'react'
import { Link } from 'react-router-dom'

const Team = (props)=>{
    const {team}=props;

return (<div className="gamess" ><Link to={`/team/${team.id}`}><div className={team.conference}>{team.full_name} {team.likes}</div></Link>
        <div className="like" onClick={()=>{props.like(team.id)}}></div><div className="dislike" onClick={()=>{props.dislike(team.id)}}></div>
</div>)
}

export default Team;