import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfilePage} from "../../redux/store";

type Props = {
    state: ProfilePage
}

const Profile = ({ state: {posts, newPostText} }: Props) => {
    console.log('PROFILE POSTS', posts)
    return (
        <div >
            <ProfileInfo/>
            <MyPosts posts={posts} newPostText={newPostText} />
        </div>
    )
}

export default Profile;