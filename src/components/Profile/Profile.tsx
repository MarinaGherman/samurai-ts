import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {addPost, ProfilePage} from "../../redux/state";

type Props = {
    state: ProfilePage
}

const Profile = ({ state: {posts, newPostText} }: Props) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts posts={posts} newPostText={newPostText} addPost={addPost}/>
        </div>
    )
}

export default Profile;