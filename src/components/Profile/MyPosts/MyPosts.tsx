import React from 'react';

import s from './MyPosts.module.scss';
import Post from './Post/Post';
import {Posts} from "../../../redux/state";
import {AddPostType, updateNewPostText} from "../../../redux/state";

type Props = {
    posts : Array<Posts>
    addPost: AddPostType,
    newPostText: string
}

const MyPosts = ({posts, addPost, newPostText}: Props) => {

    let textareaRef: any = React.createRef();

    let handleOnAddPost = () => {
        let text = textareaRef.current.value;
        addPost(text)
        updateNewPostText('');
    }
    let handleOnPostChange = () => {
        updateNewPostText(textareaRef.current.value);

    }

    return (
        <div className={s.posts}>
            My posts
            <div>
                <textarea onChange={handleOnPostChange} value={newPostText} ref={textareaRef}/>
                <button onClick={handleOnAddPost}>Add post aa</button>
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