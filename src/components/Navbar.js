import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='left'>
                <img onClick={() => Location.reload} className='logo' src={Logo} alt="" />
            </div>
            <div className='right'>
                <Link className='nav_link' to="/"> Home </Link>
                <Link className='nav_link' to="/menu"> Menu </Link>
                <Link className='nav_link' to="/about"> About </Link>
                <Link className='nav_link' to="/contact"> Contact </Link>
            </div>
        </div>
    )
}

export default Navbar