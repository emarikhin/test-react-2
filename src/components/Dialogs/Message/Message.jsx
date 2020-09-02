import React from 'react';
import { NavLink } from 'react-router-dom';
import stylename from './Message.module.css';

const Message = (props) => {
    return (
        <div className={stylename.message}>{props.message}</div>
    )
}

export default Message;