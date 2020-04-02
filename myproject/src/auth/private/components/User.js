import React from 'react'

const User = (props) => {
    let { user } = props;
    return (
        <div className="users">
            <p className="us">Name: {user.name}</p>
            <p className="us">Surname: {user.surname}</p>
            <p className="us">Email: {user.email}</p>
        </div>
    )

}
export default User