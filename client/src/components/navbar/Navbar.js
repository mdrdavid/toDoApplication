
import React from 'react'
import './nav_bar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='nav-container'>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="todo" className="nav-link">Todo</Link>
        </div>
    )
}

export default NavBar