import React from 'react';
import { NavLink } from 'react-router-dom';
import stylename from './DialogItems.module.css';

const DialogItem = (props) => {
    return (
        <div className={stylename.dialog + ' ' + stylename.active}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={stylename.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;