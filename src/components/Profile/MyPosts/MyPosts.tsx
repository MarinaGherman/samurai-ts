import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

type Props = any

const MyPosts = (props: Props) => {

    let postElements =
        props.posts.map((p:any)=> <Post message={p.message} likesCount={p.likeCount}/>)


    let newPostElement: any = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.posts}>
            My posts
            <div>
                <textarea onChange={onPostChange}
                          value={props.newPostText}
                          ref={newPostElement}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;
