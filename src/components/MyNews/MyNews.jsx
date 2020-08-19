import React from 'react';
import cl from './MyNews.module.css';
import News from './News/News';

const MyNews = (props) => {
    return  (
        <div>
            <News news='Hi there' />
            <News news='How are ya?' />
        </div>
    );
}

export default MyNews; 