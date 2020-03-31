import React from 'react'
import { isLogin } from '../services'
import { Redirect, Link } from 'react-router-dom'
import  Wrapper  from '../../teams/Wrapper'
import Logout from './components/Logout'
import Container from '../../stats/Container'

const Home = () => {
    if(isLogin()){
        return(
            <>
                <Link className="link" to="/profile">Your Profile</Link>
                <Logout />
                <Container />
                <Wrapper />
            </>
    )} else{
        return <Redirect to="/" />
    }
}

export default Home