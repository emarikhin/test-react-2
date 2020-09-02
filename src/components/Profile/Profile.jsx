import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div>
      <div>
        < ProfileInfo />
      </div>
      <div>
        <MyPosts />
      </div>
    </div>
  )
}

export default Profile;