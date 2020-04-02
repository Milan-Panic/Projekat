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

    sortPts(e){
        e.preventDefault()
        let sorted = this.state.bestFive.sort((b, a) => a.pts - b.pts);
        this.setState({bestFive: sorted})        
    }
    sortBlk(e){
        e.preventDefault()
        let sorted = this.state.bestFive.sort((b, a) => a.blk - b.blk);
        this.setState({bestFive: sorted})        
    }
    sortAsst(e){
        e.preventDefault()
        let sorted = this.state.bestFive.sort((b, a) => a.ast - b.ast);
        this.setState({bestFive: sorted})        
    }

    render() {
        console.log(this.state.bestFive);
        
        return (
            <table className="table-best">
                <thead>
                <tr>
                    <th>Games player</th>
                    <th></th>
                    <th><button onClick={(e)=>{this.sortPts(e)}}>Points</button></th>
                    <th><button onClick={(e)=>{this.sortBlk(e)}}>Blocks</button></th>
                    <th><button onClick={(e)=>{this.sortAsst(e)}}>Assist</button></th>
                </tr>
                </thead>
                <tbody>
                {this.state.bestFive.map((pl, i) => <Red key={i} pla={pl} />)}
                </tbody>
            </table>
        )
    }


}
export default Best