import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxlengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/formsControls/FormsControls";
import {useDispatch, useSelector} from "react-redux";
import {addPostActionCreator} from "../../../redux/profileReducer";

const MyPosts = React.memo(() => {
    const dispatch = useDispatch()

    const posts = useSelector(state => {
        // @ts-ignore
        return state.profilePage.posts;
    })


    const onAddPost = (values: any) => {
        dispatch(addPostActionCreator(values.newPostText))
    }

    return (
        <div className={s.posts}>
            My posts
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {posts.map((p: any) => <Post message={p.message} likesCount={p.likeCount}/>)}
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
