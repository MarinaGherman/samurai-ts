import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileType} from "../../redux/profileReducer";
import {Box} from "@mui/material";

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
        <Box >
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
            <MyPosts />
        </Box>
    )
}

export default Profile;