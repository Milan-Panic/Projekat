import React from 'react'

const Team = (props)=>{
    const {team}=props;

return (<div className={team.conference}>{team.full_name}</div>)
}

export default Team;