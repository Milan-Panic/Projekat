import React, { useState, useEffect } from 'react'
import { isLogin } from '../auth/services'
import { Redirect, useParams } from 'react-router-dom'
import { getSportGames } from './nbaServices'
import GameSport from './GameSport'
import Header from '../auth/public/components/Header'

const SportGames = () => {
    let { key } = useParams();
    const [games, setSportGames] = useState([])

    const setGamesBySport = async () => {
        let data = await getSportGames(key)
        setSportGames(data)
    }

    useEffect(() => {
        setGamesBySport()
    },[])

    if (isLogin()) {
        return (
            <>
            <Header />
            <div className="home-con">
                <div className="games-con">
                    {games.map(game => <GameSport key={game.id} game={game} />)}
                </div>
            </div>
            </>
        )
    }
    else {
        return <Redirect to="/" />
    }
}

export default SportGames