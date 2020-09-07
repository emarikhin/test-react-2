import React from 'react';
import customstyle from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import SiteBar from './../SiteBar/SiteBar';

const Navbar = (props) => {
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
        <div>
        <div className={customstyle.friends}><h3>Friends</h3></div>
            <SiteBar SiteBar={props.SiteBar}/>
        </div>
        {/* <div className={customstyle.item}>
            <NavLink to='/friends' activeClassName={customstyle.activeLink}>Friends</NavLink>
        </div> */}
    </nav>
    )
}

export default Navbar; 