import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return(
        <>
        <div className="navigation">
            
            <div className="links">
                <p><Link className="link link1" to="/register"><button className="btn btn-success btn-block">Sign up</button></Link></p>
                <p><Link className="link link2" to="/login"><button className="btn btn-info btn-block">Log in</button></Link></p>
            </div>
        </div>
        <p className="welcome"><span className="span-uvecano">Welcome to login or register</span></p>
        </>
    )
}

export default Navigation