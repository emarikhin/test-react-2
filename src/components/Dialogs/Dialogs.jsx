import React from 'react';
import { NavLink } from 'react-router-dom';
import stylename from './Dialogs.module.css';
import DialogItem from './DialogItems/DialogItems';
import stylename2 from './DialogItems/DialogItems.module.css';
import Message from './Message/Message';
import stylename3 from './Message/Message.module.css';

const Dialogs = (props) => {
    console.log(props.dialogsState);
    let MessagesElements2 = props.dialogsState.m.map(m => <Message message={m.message} ava={m.ava} myava={m.myava} />)
    let DialogsElements2 = props.dialogsState.d.map(d => <DialogItem id={d.id} name={d.name} ava={d.ava} />)

    return (
        <div className={stylename.dialogs}>
            <div className={stylename2.dialogsItems}>
                {DialogsElements2}
            </div>
            <div className={stylename.messages}>
                {MessagesElements2}
            </div>
        </div>
    );
}

export default Dialogs;