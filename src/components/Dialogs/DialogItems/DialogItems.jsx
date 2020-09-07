import React from 'react';
import { NavLink } from 'react-router-dom';
import stylename from './DialogItems.module.css';

const DialogItem = (props) => {
    return (
        <div className={stylename.dialog + ' ' + stylename.active}>
            {/* {props.ava} */}
            {/* <NavLink to={'/dialogs/' + props.id} activeClassName={stylename.activeLink}><Concat />{props.name}</NavLink> */}
            <NavLink to={'/dialogs/' + props.id} activeClassName={stylename.activeLink}><img className={stylename.item} src= {props.ava}/>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;