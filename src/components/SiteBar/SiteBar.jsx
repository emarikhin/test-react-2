import React from 'react';
import stylename from './SiteBar.module.css';
import FriendsBar from './Friends/Friends';
import { NavLink } from 'react-router-dom';

const SiteBar = (props) => {
  console.log(props.dialogsState);
  let SiteBarElements = props.SiteBar.map( d => <FriendsBar name={d.name} ava={d.ava} />);
  // let DialogsElements3 = props.dialogsState.d.map(d => <FriendsBar id={d.id} name={d.name} ava={d.ava} />)
  console.log(props.SiteBarElements)

  return (
    <div>
      <div className={stylename.main1}>
        {SiteBarElements}
      </div>
    </div>
  )
}

export default SiteBar;