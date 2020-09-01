import React from 'react';
import customstyle from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className={customstyle.nav}>
        <div className={customstyle.item}>
            <NavLink to='/profile' activeClassName={customstyle.activeLink}>Profile</NavLink>
        </div>
        <div className={`${customstyle.item} ${customstyle.active}`}>
            <NavLink to='/dialogs' activeClassName={customstyle.activeLink}>Messages</NavLink>
        </div>
        <div className={customstyle.item}>
            <NavLink to='/news' activeClassName={customstyle.activeLink}>News</NavLink>
        </div>
        <div className={customstyle.item}>
            <NavLink to='/music' activeClassName={customstyle.activeLink}>Music</NavLink>
        </div>
        <div className={customstyle.item}>
            <NavLink to='/settings' activeClassName={customstyle.activeLink}>Settings</NavLink>
        </div>
    </nav>
    )
}

export default Navbar; 