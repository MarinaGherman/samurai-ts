import React, {useState} from 'react';
import s from './ProfileInfo.module.scss'
import Loader from "../../../common/Loader";
import avatar from './../../../../assets/images/avatar.png'
import ProfileStatusWithHooks from "../../ProfileStatusWithHooks";
import {ProfileType, saveProfile} from "../../../../redux/profileReducer";
import ProfileDataForm from "../../ProfileDataForm";
import {Box} from "@mui/material";
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';


type ProfileInfoTypes = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean,
    savePhoto: any,
    saveProfile:any
}

const ProfileInfo = (props: ProfileInfoTypes) => {
    const [editMode, setEditMode] = useState(false)


    if (!props.profile) {
        return <Loader/>
    }
    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData:any) => {
        saveProfile(formData);
        setEditMode(false)
    }


    return (
        <Box className={s.main}>
            <Box>
                <div className={s.cover}>
                </div>
                <div className={s.imgBlock}>

                    {  // @ts-ignore
                        !props.profile.photos.large
                        ? <img src={avatar} alt="img"/>
                        // @ts-ignore
                        : <img className={s.img} src={props.profile.photos.large} alt="img"/>
                    }
                    <div className={s.fileBlock}>
                        {props.isOwner &&
                            <label htmlFor="inputTag">
                                <AddAPhotoTwoToneIcon/>
                                <input type="file" id="inputTag" onChange={onMainPhotoSelected}/>
                            </label>
                        }
                    </div>
                </div>
            </Box>
                <div className={s.profileBlock}>
                    <span className={s.name}>{props.profile.fullName}</span>
                    <ProfileStatusWithHooks
                        status={props.status}
                        updateStatus={props.updateStatus}
                    />
                </div>


            {editMode ?
                <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit}/> :
                <ProfileData isOwner={props.isOwner}
                             profile={props.profile}
                             goToEditMode={() => setEditMode(true)}/>
            }
        </Box>
    );
};
const Contact = ({contactTitle, contactValue}: any) => {
    return <div>
        <b>{contactTitle}</b>
         <span>{contactValue}</span>
    </div>
}

const ProfileData =({profile, isOwner, goToEditMode}:any) => {
    return  <div className={s.jobBlock}>

        <div>
            <b>Looking for a job: </b> {profile.lookingForAJob ? "yes" : 'no'}
        </div>
        <div>
            <b>My skills:</b>  {profile.lookingForAJobDescription}
        </div>
        <div>
            <b>Full name: </b> {profile.fullName}
        </div>
        <div>
            <b>About me:</b> {profile.aboutMe}
        </div>
        <b>Contacts:</b>
        {
            Object.keys(profile.contacts).map(key => <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}/>
            )
        }
        {isOwner && <button onClick={goToEditMode}>Edit</button>}
    </div>
}

export default ProfileInfo;

