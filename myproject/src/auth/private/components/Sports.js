import React, { useState, useEffect } from 'react'
import { isLogin } from '../../services'
import { Redirect } from 'react-router-dom'
import { getAllSports } from '../../auth.server'
import Sport from './Sport'
import Header from '../../public/components/Header'

const Sports = () => {

    const [sports,setSports] = useState([])

    useEffect(()=>{
        getAllSports().then(res => {
            setSports(res.data);
        })
    },[])

    if(isLogin()){
    return(
        <>
        <Header />
        <div className="profile">
            <div className="user">
                 <h3>All Sports</h3>
                {sports.map(sport => <Sport key={sport.key} sport={sport}/> )}
            </div>
        </div>
        </>


    )} else{
        return <Redirect to="/" />
    }
}

export default Sports