import React from 'react';
import { NavLink } from 'react-router-dom';
import stylename from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={stylename.dialog + ' ' + stylename.active}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={stylename.activeLink}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={stylename.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={stylename.dialogs}>
            <div className={stylename.dialogsItems}>
                < DialogItem id='1' name='Eugene' />
                < DialogItem id='2' name='Irison' />
                < DialogItem id='3' name='Ronny' />
                {/* <div className={stylename.dialog + ' ' + stylename.active}>
                    <NavLink to='/dialogs/1' activeClassName={stylename.activeLink}>Eugene</NavLink>
                </div>
                <div className={stylename.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={stylename.activeLink}>Irison</NavLink>
                </div>
                <div className={stylename.dialog}>
                    <NavLink to='/dialogs/3' activeClassName={stylename.activeLink}>Ronny</NavLink>
                </div> */}
            </div>
            <div className={stylename.messages}>
                < Message message='Whazuup' />
                < Message message='Hey bro' />
                < Message message='Chur mate' />
            </div>
        </div>
    );
}

export default Dialogs;