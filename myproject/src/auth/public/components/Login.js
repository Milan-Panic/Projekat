import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { login } from '../../auth.server';
import { setToken, setId } from '../../services';

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const history = useHistory();

    const handleClick = () => {
        login(username,password).then(res => {
            setToken(res.data.token);
            setId(res.data.user.user_id);
            history.push('home');
        }) 
    }

    return(
        <form onSubmit={(e) => { e.preventDefault(); handleClick()}}>
            <div><input type="text" id="username" placeholder="USERNAME" onInput={(e) => setUsername(e.target.value)} required/></div>
            <div><input type="password" id="password" placeholder="PASSWORD" onInput={(e) => setPassword(e.target.value)} required/></div>
            <div><input type="submit" value="Log in!" /></div>
        </form>
    )
}

export default Login