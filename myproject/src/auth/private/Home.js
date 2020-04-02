import React from 'react'
import { isLogin } from '../services'
import { Redirect } from 'react-router-dom'
import  Wrapper  from '../../teams/Wrapper'
import Header from '../public/components/Header'
//import Logout from './components/Logout'
//import Best from './components/bestFive'

const Home = () => {
    if(isLogin()){
        return(
            <>
                <Header />
                <div className="wrappera"><Wrapper /></div>
                {/* <Best className="best-five"/> */}
            </>
    )} else{
        return <Redirect to="/" />
    }
}

export default Home