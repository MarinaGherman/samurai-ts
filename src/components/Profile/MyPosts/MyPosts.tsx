import React from 'react';

import s from './MyPosts.module.scss';
import Post from './Post/Post';
import {Posts} from "../../../redux/state";
import store from "../../../redux/state";

type Props = {
    posts : Array<Posts>
    newPostText: string
}

const MyPosts = ({posts, newPostText}: Props) => {

    let textareaRef: any = React.createRef();

    let handleOnAddPost = () => {
        store.dispatch({
            type: 'ADD-POST'
        })
        store.dispatch({
            type: 'UPDATE-NEW-POST-TEXT',
            text: ''
        });
    }
    let handleOnPostChange = () => {
        store.dispatch({
            type: 'UPDATE-NEW-POST-TEXT',
            text: textareaRef.current.value
        });

    }

    return (
        <div className={s.posts}>
            My posts
            <div>
                <textarea onChange={handleOnPostChange} value={newPostText} ref={textareaRef}/>
                <button onClick={handleOnAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {
                    posts.map(dialog=> <Post message={dialog.message} likesCount={dialog.id} /> )
                }
            </div>
        </div>
    )
}

export default MyPosts;