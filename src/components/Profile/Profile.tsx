import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsTypes = {
    profile: any
    status:any
    updateStatus:any
}

const Profile = (props:ProfilePropsTypes) => {
    return (
        <div >

            <ProfileInfo
                // @ts-ignore
                profile={props.profile}
                // @ts-ignore
                status={props.status}
                // @ts-ignore
                updateStatus={props.updateStatus}


            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;