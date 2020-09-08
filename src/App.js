import React, { Profiler } from 'react';
import './App.css';
/* import Footer from './Footer'; */
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/MyNews/News/News';
import MyNews from './components/MyNews/MyNews';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogItem from './components/Dialogs/DialogItems/DialogItems';
import Message from './components/Dialogs/Message/Message';
import SiteBar from './components/SiteBar/SiteBar';

// let d = [
//   {id:1, name:'Eugene'},
//   {id:2, name:'Irison'},
//   {id:3, name:'Ronny'},
// ]

// let m = [
//   {message:'Choice!'},
//   {message:'Hey bro'},
//   {message:'Chur mate'},
// ]

// let MessagesElements2 = m.map(m => <Message message={m.message} />)
// let DialogsElements2 = d.map(d => <DialogItem id={d.id} name={d.name} />)

const App = (props) => {

  // let PostsMessages = [
  //   { message: 'First message!', likeCount: 21 },
  //   { message: 'Second message', likeCount: 25 },
  //   { message: 'Third message', likeCount: 47 },
  // ]

  // let SiteBarElements = props.appState.SiteBar.friends.map(f => <Navbar name={f.name} ava={f.ava}/>)
console.log(props)
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar SiteBar={props.appState.SiteBar.f} />
        <div className='app-wrapper-content'>
          {/* <Route path='/dialogs' component={Dialogs} /> */}
          {/* <Route path='/dialogs' render={ () => <Dialogs d={props.appState.DialogsPage.d} m={props.appState.DialogsPage.m}/>} /> */}
          {/* <Route path='/profile' component={Profile} /> */}
          <Route path='/dialogs' render={ () => <Dialogs dialogsState={props.appState.DialogsPage} AvaDialogs={props.appState.AvaDialogs}/>} />
          <Route path='/profile' render={ () => <Profile PostsMessages={props.appState.ProfilePage.PostsMessages} AddPost={props.AddPost} PostText = {props.appState.ProfilePage.PostText} UpdatePost={props.UpdatePost}/>} />
          <Route path='/news' component={MyNews} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          {/* <Route path='/friends' render={ () => <SiteBar FriendsList={props.appState.SiteBar.friends}/>} /> */}
          {/* { SiteBarElements } */}
          {/* <SiteBar name={props.appState.SiteBar.friends.name} ava={props.appState.SiteBar.friends.ava}/> */}
          {/* <SiteBar SiteBar={props.appState.SiteBar.f} /> */}
          {/* <Route path='/friends' render={ () => <SiteBar SiteBar={props.appState.SiteBar.f}/>}/> */}
          {/* <Route path='/profile' render={ () => <SiteBar SiteBar={props.appState.SiteBar}/>} /> */}

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;