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
            setId(res.data.id);
            history.push('home');
        }) 
    }

    return(
        <form className="form-group" onSubmit={(e) => { e.preventDefault(); handleClick()}}>
            <h4>Login!</h4>
            <div><input className="form-control" type="text" id="username" placeholder="USERNAME" onInput={(e) => setUsername(e.target.value)} required/></div>
            <div><input className="form-control" type="password" id="password" placeholder="PASSWORD" onInput={(e) => setPassword(e.target.value)} required/></div>
            <div><input className="btn btn-success btn-block" type="submit" value="Log in!" /></div>
        </form>
    )
}

export default Login