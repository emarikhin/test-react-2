import React from 'react';
import cl from './Post/Post.module.css';
import cl2 from '../Profile.module.css';
import customstyle from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {

  let PostsMessages = [
    {message:'First message!', likeCount:21},
    {message:'Second message', likeCount:25},
    {message:'Third message', likeCount:47},
]

let PostsElements2 = PostsMessages.map( m => <Post message={m.message} likeCount={m.likeCount}/>)


    return (
    <div className={cl2.content}>
    <div>
      <h3>My posts</h3>
      <div>
        <div className={customstyle.textarea}><textarea></textarea></div>
        <div className={customstyle.modalFooter}>
        <button>Add Post</button>
        <button>Remove</button>
      </div>
      </div>
      <div className={cl.content}>
      <div className={cl.posts}>
        { PostsElements2 }
        {/* <Post message={PostsMessages[0].message} likeCount={PostsMessages[0].likeCount}/>
        <Post message={PostsMessages[1].message} likeCount={PostsMessages[1].likeCount}/>
        <Post message={PostsMessages[2].message} likeCount={PostsMessages[2].likeCount}/> */}
      </div>
      </div>
    </div>
  </div>
    );
}

export default MyPosts;