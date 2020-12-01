import React from 'react'
import { Link } from 'react-router-dom'


const TopNav = () => {
    return (
        <div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Service">Service</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Employees">Employees</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Tasks">Tasks</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/Register">Register</Link>
                </li>
            </ul>

        </div>
    )
}

export default TopNav