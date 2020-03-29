import React from 'react'
import Player from './Player';

const Prikaz = (props) => {
    let {stats} = props;
    return (
        <div className="prikaz">
            {stats.map(stat=><Player player={stat} />)}
        </div>
    )
    
}
export default Prikaz