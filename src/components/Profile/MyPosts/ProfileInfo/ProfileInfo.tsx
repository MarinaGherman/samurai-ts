import React, {useState} from 'react';
import s from './ProfileInfo.module.scss'
import Loader from "../../../common/Loader";
import avatar from './../../../../assets/images/avatar.png'
import lookJob from "../../../../assets/images/lookJob.png";
import ProfileStatusWithHooks from "../../ProfileStatusWithHooks";
import {ProfileType} from "../../../../redux/profileReducer";

type ProfileInfoTypes = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean,
    savePhoto: any
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
    return (
        <div className={s.main}>
            {
                    // @ts-ignore
                    !props.profile.photos.large ? <img src={avatar} alt="img"/> :
                        // @ts-ignore
                        <img src={props.profile.photos.large} alt="img"/>
            }
            {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            <div>Статус:</div>
            <ProfileStatusWithHooks
                status={props.status}
                updateStatus={props.updateStatus}
            />
            {editMode ?  <ProfileDataForm profile={props.profile} /> :
                    <ProfileData isOwner={props.isOwner}
                                 profile={props.profile}
                                 goToEditMode={() => setEditMode(true)}/>
            }

        </div>
    );
};
const Contact = ({contactTitle, contactValue}: any) => {
    return <div><b>{contactTitle}</b>: <span>{contactValue}</span></div>
}

const ProfileData =({profile, isOwner, goToEditMode}:any) => {
return  <div className={s.jobBlock}>
    <div className={s.iconJobBlock}>
        <img className={s.icon} src={lookJob} alt="img"/>
    </div>
    <h2 className={s.name}>{profile.fullName}</h2>
    <h4>Описание работы</h4>
    <p>{profile.lookingForAJobDescription}</p>
    <div className={s.profileInfo}>
        <b>About me:</b>
        <h3>{profile.aboutMe}</h3>
    </div>
    <div className={s.contacts}>
        <b>Contacts:</b>
        {
            Object.keys(profile.contacts).map(key => <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}/>
            )
        }
    </div>
    {isOwner && <button onClick={goToEditMode}>Edit</button>}
</div>
}
const ProfileDataForm =({profile}:any) => {
    return  <div >
        form

    </div>
}

export default ProfileInfo;

