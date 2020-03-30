import axios from 'axios';
const BASE_URL='https://www.balldontlie.io/api/v1/teams';

const getAll = async () => {
    let response = await axios(BASE_URL);
    //console.log(response.data.data);
    return response.data.data;    
}
export { getAll }