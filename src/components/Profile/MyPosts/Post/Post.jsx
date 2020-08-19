import React from 'react';
import cl from './Post.module.css';

const Post = (props) => {
  return (
    <div className={cl.item}>
      <img src='https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_09279e8e.jpeg?region=0,0,300,300'></img>
      { props.message }
      <div>
        <span>like=</span>
        { props.likeCount }
      </div>
    </div>
  );
}

export default Post;