import React, { useState, useEffect } from 'react'
import { getUserById, allUsers } from '../../auth.server'
import { isLogin } from '../../services'
import { Redirect } from 'react-router-dom'
import User from './User'
import Header from '../../public/components/Header'
import Pagination from './Pagination'
const Profile = () => {

    const [user,setUser] = useState({
        username: '',
        name: '',
        surname: '',
        email: ''
    })
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(4)

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
            setLoading(true);
            setUsers(res.data.users);
            setLoading(false)
        })
        //OVDE POZVATI AKO BUDE TREBALO
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

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    if(isLogin()){
    return(
        <>
        <Header />
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
                <input className='form-control search-user' type='search' placeholder='Search users!'
                onChange={(e) => { handleChange(e) }}></input>
               {currentPosts.map(us=><User key={us.user_id} user={us}/>)}
               <Pagination postsPerPage={postsPerPage} totalPosts={users.length} paginate={paginate}/>
           </div>
        </div>
        </>
    )} else{
        return <Redirect to="/" />
    }
}

export default Profile