import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';
import {PostType} from "../../../redux/profileReducer";
import {Field, reduxForm} from "redux-form";
import {maxlengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/formsControls/FormsControls";

type MyPostsPropsTypes = {
    posts:PostType[]
    addPost: (newPostText: string) => void
}

const MyPosts = React.memo((props: MyPostsPropsTypes) => {
    let postElements =
        props.posts.map((p) => <Post message={p.message} likesCount={p.likeCount}/>)


    let onAddPost = (values: any) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.posts}>
            My posts
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
});

// redux form
const maxLength10 = maxlengthCreator(10)
const AddNewPostForm =(props: { handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined; }) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component= {Textarea}
                   name='newPostText'
                   placeholder="Add Post"
                   validate={[required, maxLength10]} />
            <button>Add post</button>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: "addNewPost"})(AddNewPostForm)
//
export default MyPosts;
