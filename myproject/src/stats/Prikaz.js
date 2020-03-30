import React from 'react'
import Player from './Player';

const Prikaz = (props) => {
    let {stats} = props;
    return (
        <div className="prikaz">
            {stats.map((stat, i)=><Player key={i} player={stat} />)}
        </div>
    )
    
}
export default Prikaz