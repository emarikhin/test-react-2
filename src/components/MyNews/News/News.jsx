import React from 'react';
import cl from './News.module.css';

const News = (props) => {
    return (
        <div>
            {props.news}
        </div>
    )
}

export default News;