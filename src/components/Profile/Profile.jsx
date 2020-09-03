import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Post from './MyPosts/Post/Post';
import ProfileInfo from './ProfileInfo/ProfileInfo';
//import PostsMessages from './PostsMessages/PostsMessages';

// let PostsMessages = [
//   { message: 'First message!', likeCount: 21 },
//   { message: 'Second message', likeCount: 25 },
//   { message: 'Third message', likeCount: 47 },
// ]

const Profile = (props) => {

  return (
    <div>
      <div>
        <ProfileInfo />
      </div>
      <div>
        <MyPosts PostsMessages={props.PostsMessages}/>
      </div>
    </div>
  )
}

export default Profile;