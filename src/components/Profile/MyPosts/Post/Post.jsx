import React from 'react';
import cl from './Post.module.css';

const Post = (props) => {
  let AvaSource = <img src='https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_09279e8e.jpeg?region=0,0,300,300'></img>
  return (
    <div className={cl.item}>
      {/* <img src='https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_09279e8e.jpeg?region=0,0,300,300'></img> */}
      { AvaSource }
      { props.message }
      <div>
        <span>likes: </span>
        { props.likeCount }
      </div>
    </div>
  );
}

export default Post;