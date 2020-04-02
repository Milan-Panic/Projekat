import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return(
        <div className="header-container">
            <Link to="/home"><img className="logo" src="./img/logo.png"></img></Link>
            <h1>Official NBA Stats</h1>
        </div>
    )
}

export default Header