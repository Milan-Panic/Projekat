import axios from 'axios'
const baseURL = "https://coetus.herokuapp.com";
const REG = "/api/users";


function register (user) {
    axios.put(`${baseURL}${REG}`,{user})
    .then(res => 
        {
            console.log(res.data);
        })
}

export {register}