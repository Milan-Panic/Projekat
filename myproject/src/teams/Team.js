import React from 'react'
import { Link } from 'react-router-dom'

const Team = (props)=>{
    const {team}=props;

return (<Link to={`/team/${team.id}`}><div className={team.conference}>{team.full_name}</div></Link>)
}

export default Team;