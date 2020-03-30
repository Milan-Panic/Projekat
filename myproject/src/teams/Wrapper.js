import React from 'react'
import { getAll } from './nbaServices'
import TeamsList from './TeamsList';

class Wrapper extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            teams: [],
            showConference: true,
            prikaz: []
        }

        
    }

    componentDidMount(){
        this.getAllTeams()
    }

    getAllTeams = async () => {
        let data = await getAll();
        this.setState({
            teams: data,
            prikaz: data //ovo ovde je da bi imalo pocetno citanje
        })
    }
    west = () => {
        const filteredWest = this.state.teams.filter(tm => tm.conference === "West")
        return filteredWest
    }
    east = () => {
        const filteredEast = this.state.teams.filter(tm => tm.conference === "East")
        return filteredEast
    }

    handleClick = () => {
        let data = this.state.showConference ? this.west() : this.east()
        this.setState({
            prikaz: data,
            showConference: !this.state.showConference
        })
        //console.log(data);
        
    }


    render() {
        return (
            <div>
                <button onClick={() => { this.handleClick() }}>{this.state.showConference ? 'Show East' : 'Show West'}</button>
                <TeamsList teams={this.state.prikaz}/>
            </div>
        )
    }

}
export default Wrapper;
