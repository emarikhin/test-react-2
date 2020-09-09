import React from 'react';
import { NavLink } from 'react-router-dom';
import stylename from './DialogItems.module.css';
import { Route } from 'react-router-dom';
import Dialogs from './../Dialogs';


const DialogItem = (props) => {
    return (
        <div className={stylename.dialog + ' ' + stylename.active}>
            {/* {props.ava} */}
            {/* <NavLink to={'/dialogs/' + props.id} activeClassName={stylename.activeLink}><Concat />{props.name}</NavLink> */}
            <NavLink to={'/dialogs/' + props.id} activeClassName={stylename.activeLink}><img className={stylename.item} src= {props.ava}/>{props.name}</NavLink>
            {/* <Route path={'/dialogs/' + props.id} render={ () => <Dialogs id={props.id} ava={props.ava} name={props.name} dialogsState={props.dialogsState}/>} /> */}
        </div>
    )
}

export default DialogItem;