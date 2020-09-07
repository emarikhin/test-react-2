import React from 'react';
import stylename from './Friends.module.css';
import stylenav from './../../Navbar/Navbar.module.css';

const FriendsBar = (props) => { 
  return (
    <div>
    <div className={stylename.main1}>
      <div><img className={stylename.img} src={props.ava}/><div>{props.name}</div></div>
    </div>
    </div>
  )
}

export default FriendsBar;