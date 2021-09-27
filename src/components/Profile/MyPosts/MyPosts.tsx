import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

type PostType = any;

const MyPosts = (props : PostType) => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='0'/>
                <Post message="It's my first post" likesCount='23' />
            </div>
        </div>
    )
}

export default MyPosts;