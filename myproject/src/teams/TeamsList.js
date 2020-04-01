import React from 'react'
import Team from './Team';

const TeamsList = (props)=>{
    let {teams}=props;

    return (<div className="conference-show">
        {teams.map(team=><Team key={team.id} like={props.like} dislike={props.dislike} team={team} />)}
    </div>)
}

export default TeamsList;