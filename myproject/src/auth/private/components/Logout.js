import React from 'react'
import { useHistory } from 'react-router-dom';
import { deleteUser } from '../../services';

const Logout = () => {

    const history = useHistory();

    const handleChange = (e) => {
            deleteUser().then(() => {
                history.push('/');
            })
    }

    return(
        <div id="logout" >
            Log out? 
            <button onClick={(e) => handleChange(e)}>Logout</button>
        </div>
    )

}

export default Logout