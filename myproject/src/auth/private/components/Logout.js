import React from 'react'
import { useHistory } from 'react-router-dom';
import { deleteUser } from '../../services';
import Header from '../../public/components/Header';

const Logout = () => {

    const history = useHistory();

    const handleChange = (e) => {
            deleteUser().then(() => {
                history.push('/');
            })
    }

    return(
        <>
        <Header />
        <div id="logout" >
            <p>Are you sure you want to go?!</p>
            <button className="btn btn-success btn-block" onClick={(e) => handleChange(e)}>Logout</button>
        </div>
        </>
    )

}

export default Logout