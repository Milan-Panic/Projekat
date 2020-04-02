import React, { useState, useEffect } from 'react'
import { isLogin } from '../auth/services'
import { Redirect, useParams } from 'react-router-dom'
import { getGames } from './nbaServices'
import Game from './Game'
import Spinner from 'react-bootstrap/Spinner'

const TeamsDes = () => {
    let { id } = useParams();
    const [games, setGM] = useState([])
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)

    const setGames = async () => {
        let data = await getGames(id)
        setGM(data)
        setLoading(true)
    }
    // const getName = () => {
    //     let name;
    //     games.forEach(gm =>{
    //         if(gm.home_team.id === id){ 
    //             name = gm.home_team.name
    //             setName(name);
    //         }
    //     })
    // }

    useEffect(() => {
        setGames()
        // getName()
    }, [])

    const handleChange = (e) => {
        console.log(e.target.value);
        const months = document.querySelectorAll('.date')
        for (let index = 0; index < months.length; index++) {
            if (months[index].innerHTML == e.target.value) {
                months[index].parentElement.style.display = ''
            } else if (e.target.value == 'ALL') {
                months[index].parentElement.style.display = ''
            }
            else {
                months[index].parentElement.style.display = 'none'
            }

        }
        console.log(months);


    }

    if (isLogin()) {
        console.log(games);
        return (
            <div className="home-con">
                <select id="home" onChange={(e) => { handleChange(e) }}>
                    <option selected value="ALL">ALL</option>
                    <option value="Jan">Januar</option>
                    <option value="Feb">Februar</option>
                    <option value="Mart">Mart</option>
                    <option value="Apr">April</option>
                    <option value="Maj">Maj</option>
                    <option value="Jun">Jun</option>
                    <option value="Jul">Jul</option>
                    <option value="Avg">Avgust</option>
                    <option value="Sep">Septembar</option>
                    <option value="Okt">Oktobar</option>
                    <option value="Nov">Novembar</option>
                    <option value="Dec">Decembar</option>
                </select>
                <div className="games-con">
                    {loading ? games.map(game => <Game key={game.id} game={game} />) :
                        <Spinner animation="border" variant="danger" size="xl" />
                    }
                </div>
            </div>
        )
    }
    else {
        return <Redirect to="/" />
    }
}

export default TeamsDes