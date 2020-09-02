import React from 'react';
import cl from './Post/Post.module.css';
import cl2 from '../Profile.module.css';
import customstyle from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {
    return (
    <div className={cl2.content}>
    <div>
      <h3>My posts</h3>
      <div>
        <div className={customstyle.textarea}><textarea></textarea></div>
        <div>
        <button>Add Post</button>
        <button>Remove</button>
      </div>
      </div>
      <div className={cl.content}>
      <div className={cl.posts}>
        <Post message='First message' likeCount='5'/>
        <Post message='Second message' likeCount='17'/>
        <Post message='Third message' likeCount='47'/>
      </div>
      </div>
    </div>
  </div>
    );
}

export default MyPosts;