import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return(
        <div className="header-container navbar sticky-top">
            <Link to="/home"><img className="logo" src="../logo.png" alt="NBA"></img></Link>
            <h1>Official NBA Stats</h1>
            <div className="nav">
                <Link className="link nav-item" to="/profile"><button className="btn btn-dark">Your Profile</button></Link>
                <Link className="compare nav-item" to="/compare"><button className="btn btn-dark">Player Compare</button></Link>
                <Link className="nav-item" to="/logout"><button className="btn btn-danger">Logout</button></Link>
            </div>
        </div>
    )
}

export default Header