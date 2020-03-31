import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { register, login } from '../../auth.server';
import { setToken, setId } from '../../services';

const Register = () => {
    const [ime, setIme] = useState('')
    const [prezime, setPrezime] = useState('')
    const [korisnicko, setKorisnicko] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPass, setconfPass] = useState('')
    const [url, setUrl] = useState('')


    const [validEmail, setValidEmail] = useState('')
    const [samePass, setSamePass] = useState('')

    const history = useHistory();

    useEffect(()=>{
        function isValidEmail() {
            if((/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/).test(email)){
                setValidEmail(true)
            }else{
                setValidEmail(false)
            }
        }
        console.log(email);
        isValidEmail()        
    },[email])

    useEffect(() =>  {
        setSamePass(confPass === password)
        console.log(confPass === password);
        
    },[confPass, password])

    let user = {
        name: ime,
        surname: prezime,
        username: korisnicko,
        password: password,
        email: email,
        picture: url
    }

    const handleSubmit = () => {
        if(validEmail && samePass){
        register(user)
        .then(() => {
            login(korisnicko,password).then(res =>{
                console.log(res.data.token);                
                setToken(res.data.token);
                setId(res.data.user.user_id);
                history.push('home');
            })
        })
        } else{
            alert('Something wrong!')
        }
    }

    return (
        <form>
            <input type="text" placeholder="Ime" required onInput={e => {
                setIme(e.target.value)
            }}/>
            <input type="text" placeholder="Prezime" required onInput={e => {
                setPrezime(e.target.value)
            }}/>

            <input type="text" placeholder="Korisnicko ime" required onInput={e => {
                setKorisnicko(e.target.value)
            }}/>  
            <input type="email" placeholder="Email" required onInput={e => {
                setEmail(e.target.value)
            }}/>
            <input type="password" placeholder="Sifra" required onInput={e => {
                setPassword(e.target.value)
            } }/>
            <input type="password" placeholder="Potvrdi sifru" required onInput={e => {
                setconfPass(e.target.value)
            }} />
            <input type="text" placeholder="Unesi URL.jpg" required onInput={e => {
                setUrl(e.target.value)
            }} />
                

            <input type="submit" value="Register" onClick={e => {e.preventDefault();handleSubmit()}} />
        </form>
    )
}
export default Register
 