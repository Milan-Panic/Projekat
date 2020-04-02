import React, { useState, useEffect } from 'react'
import { getUserById, allUsers } from '../../auth.server'
import { isLogin } from '../../services'
import { Redirect, useParams } from 'react-router-dom'
import User from './User'

const Profile = () => {

    const [user,setUser] = useState({
        username: '',
        name: '',
        surname: '',
        email: ''
    })
    const [users, setUsers] = useState([])

    useEffect(()=>{
        getUserById(localStorage.getItem('id')).then(res => {
            setUser({
                username: res.data.user.username,
                name: res.data.user.name,
                surname: res.data.user.surname,
                email: res.data.user.email
            })
        })
        allUsers().then(res => {
            setUsers(res.data.users)
        })
    },[])

    const handleChange = (e) => {
        const user = document.querySelectorAll('.users')
        for (let index = 0; index < user.length; index++) {
            if (user[index].innerHTML.includes(e.target.value)) {
                user[index].style.display = ''
            }
            else{
                user[index].style.display = 'none'
            }
        }      
    }

    if(isLogin()){
    return(
        <div className="profile">
           <div className="user">
            <h3>Hello {user.username}!</h3>
               <h4>Info</h4>
               <p>Name: {user.name}</p>
               <p>Surname: {user.surname}</p>
               <p>Email: {user.email}</p>
           </div>
           <div className="user">
                <h3>All Users</h3>
                <input className='search-user' type='text' placeholder='Search users!'
                onChange={(e) => { handleChange(e) }}></input>
               {users.map(us=><User key={us.user_id} user={us}/>)}
           </div>
        </div>
    )} else{
        return <Redirect to="/" />
    }
}

export default Profile