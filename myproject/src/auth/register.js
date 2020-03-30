import React, { useState, useEffect } from 'react';
import { register } from './auth.service';

const Register = ({setUser, history}) => {
    const [ime, setIme] = useState('')
    const [prezime, setPrezime] = useState('')
    const [korisnicko, setKorisnicko] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPass, setconfPass] = useState('')

    const [validEmail, setValidEmail] = useState('')
    const [samePass, setSamePass] = useState('')

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

    function handleSubmit (){
        if(!validEmail || !samePass)
        return
        register({ime,prezime,korisnicko,email,password})
        .then(data => {
            if(data){
            setUser(data.user) //ili sta vec ide
            }
            else{
                console.log("Neuspesna registracija");                
            }
        })
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
                

            <input type="submit" value="Register" onClick={e => {e.preventDefault();handleSubmit()}} />
        </form>
    )
}
export default Register
 