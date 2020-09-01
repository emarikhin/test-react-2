import React from 'react';
import { NavLink } from 'react-router-dom';
import stylename from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={stylename.dialogs}>
            <div className={stylename.dialogsItems}>
                <div className={stylename.dialog + ' ' + stylename.active}>
                    <NavLink to='/dialogs/1' activeClassName={stylename.activeLink}>Eugene</NavLink>
                </div>
                <div className={stylename.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={stylename.activeLink}>Irison</NavLink>
                </div>
                <div className={stylename.dialog}>
                    <NavLink to='/dialogs/3' activeClassName={stylename.activeLink}>Ronny</NavLink>
                </div>
            </div>
            <div className={stylename.messages}>
                <div className={stylename.message}>Hey peeps!</div>
                <div className={stylename.message}>Sweetaz</div>
                <div className={stylename.message}>Chur</div>
            </div>
        </div>
    );
}

export default Dialogs;