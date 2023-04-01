import React from 'react'
import { Link } from 'react-router-dom'

const Sport = (props) => {
    let { sport } = props;
    return (
        <div className="users">
                <p className="us">Group: {sport.group}</p>
                <p className="us">Title: {sport.title}</p>
                <p className="us">Description: {sport.description}</p>
                <p className="us">Active: {sport.active ? 'Yes' : 'No'}</p>
                <Link to={`/sport/${sport.key}`}>
                    <button className="btn btn-info btn-block">Visit</button>
                </Link>
        </div>
    )

}
export default Sport