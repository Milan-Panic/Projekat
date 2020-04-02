import React, { Component } from 'react'
import axios from 'axios'
import Red from './Red'

class Best extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bestFive: []
        }
    }

    getPlayers = async () => {
        const res = await axios.get('https://www.balldontlie.io/api/v1/season_averages?seasons=2019&player_ids[]=192&player_ids[]=246&player_ids[]=172&player_ids[]=237&player_ids[]=15')
        this.setState({ bestFive: res.data.data })
    }

    componentDidMount() {
        this.getPlayers()

    }

    sort(e, arg){
        e.preventDefault()
        let sorted = this.state.bestFive.sort((b, a) => a[arg] - b[arg]);
        this.setState({bestFive: sorted})        
    }
    
    render() {
        console.log(this.state.bestFive);
        
        return (
            <div className="table-best">
            <h3>Best Five for Season 2018/2019</h3>
            <table className="table">
                <thead>
                <tr>
                    <th></th>
                    <th>Player Name:</th>
                    <th>Games</th>
                    <th><button className="btn btn-warning btn-block" onClick={(e)=>{this.sort(e, 'pts')}}>Points</button></th>
                    <th><button className="btn btn-warning btn-block" onClick={(e)=>{this.sort(e, 'blk')}}>Blocks</button></th>
                    <th><button className="btn btn-warning btn-block" onClick={(e)=>{this.sort(e, 'ast')}}>Assist</button></th>
                </tr>
                </thead>
                <tbody>
                {this.state.bestFive.map((pl, i) => <Red key={i} pla={pl} />)}
                </tbody>
            </table>
            </div>
        )
    }


}
export default Best