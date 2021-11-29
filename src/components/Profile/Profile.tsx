import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsTypes = {
    profile: any
}

const Profile = (props:ProfilePropsTypes) => {
    return (
        <div >

            <ProfileInfo
                // @ts-ignore
                profile={props.profile}
            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;