import React from 'react';
import cl from './Post/Post.module.css';
import cl2 from '../Profile.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
    <div className={cl2.content}>
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove</button>
      </div>
      <div className={cl.posts}>
        <Post message='First message' likeCount='5'/>
        <Post message='Second message' likeCount='17'/>
        <Post message='Third message' likeCount='47'/>
      </div>
    </div>
  </div>
    );
}

export default MyPosts;