import React, { useState } from 'react'
import { getUserById } from '../../auth.server'
import { isLogin } from '../../services'
import { Redirect } from 'react-router-dom'

const Profile = () => {

    const [user,setUser] = useState({
        username: '',
        name: '',
        surname: '',
        email: ''
    })

    getUserById(localStorage.getItem('id')).then(res => {
        setUser({
            username: res.data.user.username,
            name: res.data.user.name,
            surname: res.data.user.surname,
            email: res.data.user.email
        })
    })
    if(isLogin()){
    return(
        <div className="profile">
           <p>Hello {user.username}!</p>
           <div className="user">
               <h3>Info</h3>
               <p>Name: {user.name}</p>
               <p>Surname: {user.surname}</p>
               <p>Email: {user.email}</p>
           </div>
        </div>
    )} else{
        return <Redirect to="/" />
    }
}

export default Profile