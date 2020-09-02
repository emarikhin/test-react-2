import React from 'react';
import { NavLink } from 'react-router-dom';
import stylename from './Dialogs.module.css';
import DialogItem from './DialogItems/DialogItems';
import stylename2 from './DialogItems/DialogItems.module.css';
import Message from './Message/Message';
import stylename3 from './Message/Message.module.css';

const Dialogs = (props) => {

    let d = [
        {id:1, name:'Eugene'},
        {id:2, name:'Irison'},
        {id:3, name:'Ronny'},
    ]

    let m = [
        {message:'Choice!'},
        {message:'Hey bro'},
        {message:'Chur mate'},
    ]

    let MessagesElements2 = m.map(m => <Message message={m.message} />)

    let DialogsElements = [
        <DialogItem id={d[0].id} name={d[0].name} />,
        <DialogItem id={d[1].id} name={d[1].name} />,
        <DialogItem id={d[2].id} name={d[2].name} />
    ]

    let DialogsElements2 = d.map(d => <DialogItem id={d.id} name={d.name} />)

    return (
        <div className={stylename.dialogs}>
            <div className={stylename2.dialogsItems}>
                { DialogsElements2 }

                {/* <DialogItem id={d[0].id} name={d[0].name} />
                <DialogItem id={d[1].id} name={d[1].name} />
                <DialogItem id={d[2].id} name={d[2].name} /> */}
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
            { MessagesElements2 }
                {/* < Message message={m[0].message} />
                < Message message={m[1].message} />
                < Message message={m[2].message} /> */}
            </div>
        </div>
    );
}

export default Dialogs;