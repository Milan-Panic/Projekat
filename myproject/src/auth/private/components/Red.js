import React from 'react'

const Red = (props) => {
    let { pla } = props;
    let name;
    switch (pla.player_id) {
        case 172: name = 'Paul George'
            break;
        case 15: name = 'Giannis Antetokounmpo'
            break;
        case 237: name = 'LeBron James'
            break;
        case 192: name = 'James Harden'
            break;
        case 246: name = 'Nikola Jokic'
            break;
    }
    return (
        <tr className="red">
            <td>{name}</td>
            <td>{pla.games_played}</td>
            <td>{pla.pts}</td>
            <td>{pla.blk}</td>
            <td>{pla.ast}</td>
        </tr>
    )

}
export default Red