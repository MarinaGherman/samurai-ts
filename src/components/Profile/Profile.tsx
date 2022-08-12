import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsTypes = {
    profile: ProfileType
    status:string
    updateStatus:(status:string) => void
    isOwner: boolean
    savePhoto:any
    saveProfile:any
}

const Profile = (props:ProfilePropsTypes) => {
    return (
        <div >
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
            <MyPosts />
        </div>
    )
}

export default Profile;