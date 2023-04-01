import axios from 'axios';
const BASE_URL = 'https://www.balldontlie.io/api/v1/teams';
const gamesUrl = 'https://www.balldontlie.io/api/v1/games?seasons[]=2018&team_ids[]=';
const parametri = '&per_page=90';

const sportsApi = 'https://api.the-odds-api.com/v4/sports/';
const apiKey = '?apiKey=531cc213011ad8f7bd37e90bf5bb95e5';

const getAll = async () => {
    let response = await axios.get(BASE_URL);
    //console.log(response.data.data);
    return response.data.data;
}

const getGames = async (id) => {
    let players = await axios.get(`${gamesUrl}${id}${parametri}`)
    return players.data.data
}

const getSportGames = async (key) => {
    let spGames = await axios.get(`${sportsApi}${key}/odds/${apiKey}&regions=us`)
    return spGames.data
}

export { getAll, getGames, getSportGames }