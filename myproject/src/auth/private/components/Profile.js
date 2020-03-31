import React, { useState } from 'react'
import { getUserById } from '../../auth.server'

const Profile = () => {

    const [user,setUser] = useState({
        username: '',
        name: '',
        surname: '',
        email: '',
        picture: ''
    })

    getUserById(localStorage.getItem('id')).then(res => {
        setUser({
            username: res.data.user.username,
            name: res.data.user.name,
            surname: res.data.user.surname,
            email: res.data.user.email,
            picture: res.data.user.picture
        })
    })

    return(
        <div className="profile">
           <p>Hello {user.username}!</p>
           <img src={user.picture} alt="No picture!"></img>
           <div className="user">
               <h3>Info</h3>
               <p>Name: {user.name}</p>
               <p>Surname: {user.surname}</p>
               <p>Email: {user.email}</p>
           </div>
        </div>
    )
}

export default Profile