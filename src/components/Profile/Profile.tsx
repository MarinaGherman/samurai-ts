import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsTypes = {
    profile: ProfileType
    status:string
    updateStatus:(status:string) => void
    isOwner: boolean
}

const Profile = (props:ProfilePropsTypes) => {
    // @ts-ignore
    return (
        <div >
            <ProfileInfo
                // @ts-ignore
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;