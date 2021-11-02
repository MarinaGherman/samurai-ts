import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = any

const Profile = (props:PropsType) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;