import axios from 'axios'
const baseURL = "https://coetus.herokuapp.com/api/users";

const allUsers = async() => {
    return await axios.get(`${baseURL}`)
}

const getUserById = async(user_id) => {
    return await axios.get(`${baseURL}/${user_id}`)
}

const register = async(user) => {
    return await axios.put(`${baseURL}`, user)
}

const login = async(kor, pass) => {
    return await axios.post(`${baseURL}`,{username: kor, password: pass})
}

export { register, login, allUsers, getUserById }