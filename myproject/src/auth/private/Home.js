import React from 'react'
import { isLogin } from '../services'
import { Redirect, Link } from 'react-router-dom'
import  Wrapper  from '../../teams/Wrapper'
import Logout from './components/Logout'

const Home = () => {
    if(isLogin()){
        return(
            <>
            <div className="meni">
                <Link className="link" to="/profile"><button>Your Profile</button></Link>
                <Link className="compare" to="/compare"><button>Player Compare</button></Link>
                <Logout />
            </div>
                <div><Wrapper /></div>
            </>
    )} else{
        return <Redirect to="/" />
    }
}

export default Home