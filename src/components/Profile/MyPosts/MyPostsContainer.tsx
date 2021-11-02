import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import StoreContext from '../../../StoreContext';


const MyPostsContainer = (props:any) => {



    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
        props.store.dispatch(updateNewPostTextActionCreator(""));
    }

    let onPostChange = (text:any) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }
    return (
        // @ts-ignore
        <StoreContext.Consumer>
            {(store) => {



                return (
                    <MyPosts updateNewPostText={onPostChange}
                             addPost={addPost}
                        // @ts-ignore
                             posts={store.getState().profileReducer.posts}
                        // @ts-ignore
                             newPostText={store.getState().profileReducer.newPostText} />
                )}
        }
        </StoreContext.Consumer>
            )
}

export default MyPostsContainer;