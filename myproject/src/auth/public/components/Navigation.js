import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return(
        <div className="navigation">
            
            <div className="links">
                <p><Link className="link link1" to="/register">Sign up</Link></p>
                <p><Link className="link link2" to="/login">Log in</Link></p>
            </div>
        </div>
    )
}

export default Navigation