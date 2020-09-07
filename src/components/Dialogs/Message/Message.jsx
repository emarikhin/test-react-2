import React from 'react';
import { NavLink } from 'react-router-dom';
import stylename from './Message.module.css';

const Message = (props) => {
    return (
        <div>
            <div className={stylename.messagesLeft}><img className={stylename.item} src= {props.ava}/>{props.message}</div>
            <div className={stylename.messagesRight}>{props.message}<img className={stylename.item} src= {props.myava}/></div>
        </div>
    )
}

export default Message;