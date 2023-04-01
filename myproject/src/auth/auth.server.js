import axios from 'axios'
const baseURL = "https://coetus.herokuapp.com/api/users";

const phpAuth = "http://localhost/php_user_authentication";

const sportsOdds = "https://api.the-odds-api.com/v4/sports?apiKey=531cc213011ad8f7bd37e90bf5bb95e5";

const allUsers = async() => {
    return await axios.get(`${phpAuth}/all_users.php`)
}

const  getAllSports = async() => {
    return await axios.get(sportsOdds)
}

const getUserById = async(user_id) => {
    return await axios.get(`${phpAuth}/get_user.php?id=${user_id}`)
}

const register = async(user) => {
    return await axios.put(`${phpAuth}/registration.php`, user)
}

const login = async(kor, pass) => {
    return await axios.post(`${phpAuth}/login.php`,{username: kor, password: pass}, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
}

export { register, login, allUsers, getUserById, getAllSports }