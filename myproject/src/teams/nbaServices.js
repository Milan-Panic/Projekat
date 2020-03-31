import axios from 'axios';
const BASE_URL = 'https://www.balldontlie.io/api/v1/teams';
const gamesUrl = 'https://www.balldontlie.io/api/v1/games?seasons[]=2018&team_ids[]=';
const parametri = '&per_page=90';

const getAll = async () => {
    let response = await axios.get(BASE_URL);
    //console.log(response.data.data);
    return response.data.data;
}

const getGames = async (id) => {
    let players = await axios.get(`${gamesUrl}${id}${parametri}`)
    return players.data.data
}

export { getAll, getGames }