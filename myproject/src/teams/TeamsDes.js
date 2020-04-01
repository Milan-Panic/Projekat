import React, { useState, useEffect } from 'react'
import { isLogin } from '../auth/services'
import { Redirect, useParams } from 'react-router-dom'
import { getGames } from './nbaServices'
import Game from './Game'

const TeamsDes = () => {
    let { id } = useParams();
    const [games, setGM] = useState([])
    const [name, setName] = useState('')
    const [filterHome, setFH] = useState([])

    const setGames = async () => {
        let data = await getGames(id)
        setGM(data)
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
        /*const selectedValue = e.target.value;
        console.log(selectedValue);
        console.log(name);        
        const filtered = games.filter(gm => gm.home_team.name === 'Nuggets')
        setGM(filtered)*/
        console.log(e.target.value);
        const months = document.querySelectorAll('.date')
        for (let index = 0; index < months.length; index++) {
            if (months[index].innerHTML == e.target.value) {
                months[index].parentElement.style.display = ''
            }else if(e.target.value == 'ALL'){
                months[index].parentElement.style.display = ''
            }
            else{
                months[index].parentElement.style.display = 'none'
            }
            
        }
        console.log(months);
        

    }

    if (isLogin()) {
        console.log(games);
        return (
            <>
                <select id="home" onChange={(e) => { handleChange(e) }}>
                    <option selected value="ALL">ALL</option>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mart">Mart</option>
                    <option value="Apr">Jan</option>
                    <option value="Maj">Apr</option>
                    <option value="Jun">Jan</option>
                    <option value="Jul">Jan</option>
                    <option value="Avg">Jan</option>
                    <option value="Sep">Jan</option>
                    <option value="Okt">Jan</option>
                    <option value="Nov">Jan</option>
                    <option value="Dec">Jan</option>
                </select>
                <div className="games-con">
                    {games.map(game => <Game key={game.id} game={game} />)}
                </div>
            </>
        )
    }
    else {
        return <Redirect to="/" />
    }
}

export default TeamsDes