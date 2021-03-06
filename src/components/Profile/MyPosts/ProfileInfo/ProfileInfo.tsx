import React from 'react';
import s from './ProfileInfo.module.scss'
import Loader from "../../../common/Loader";
import avatar from './../../../../assets/images/avatar.png'
import lookJob from "../../../../assets/images/lookJob.png";
import facebook from "../../../../assets/images/fb.png";
import website from "../../../../assets/images/global.png";
import  vk from "../../../../assets/images/vk.png";
import twitter from "../../../../assets/images/twitter.png";
import instagram from "../../../../assets/images/instagram.png";
import youtube from "../../../../assets/images/youtube.png";
import github from "../../../../assets/images/github.png";
import mainLink from "../../../../assets/images/mail.png";
import {ProfileType} from "../../../../redux/profileReducer";
import ProfileStatusWithHooks from "../../ProfileStatusWithHooks";

type ProfileInfoTypes = {
    profile: ProfileType
    status:string
    updateStatus:(status:string) => void
    isOwner: boolean,
    savePhoto:any
}

const images: any = {
    facebook: facebook,
    website: website,
    vk: vk,
    twitter: twitter,
    instagram: instagram,
    youtube: youtube,
    github: github,
    mainLink: mainLink
}

const contacts = Object.keys(images)
const ProfileInfo = (props:ProfileInfoTypes) => {
    if(!props.profile)
    {return <Loader/>}
    const onMainPhotoSelected =(e:any) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={s.main}>
            <div>
                {
                    // @ts-ignore
                    !props.profile.photos.large ? <img src={avatar}  alt="img"/> :<img src={props.profile.photos.large} alt="img" />}
                {
                    props.profile.lookingForAJob === true
                        ?
                        <div className={s.jobBlock}>
                        <div className={s.iconJobBlock}>
                            <img className={s.icon} src={lookJob} alt="img" />
                        </div>
                        <h4>???????????????? ????????????</h4>
                        <p>{props.profile.lookingForAJobDescription}</p>
                    </div>
                        : ''
                }
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
            <div className={s.profileInfo}>
                <h2 className={s.name}>{props.profile.fullName}</h2>
                <h3>{props.profile.aboutMe}</h3>
            </div>
            <div className={s.contacts}>
                {contacts.map(contact => {
                    // @ts-ignore
                    if (Object.keys(props.profile.contacts).includes(contact) && props.profile.contacts[contact]) {
                        // @ts-ignore
                        return <a href={props.profile.contacts[contact]}> <img className={s.socialIcons} src={images[contact]} alt=""/></a>
                    }

                    return null;
                })}
                {/*{props.profile.contacts.facebook ? <a href={props.profile.contacts.facebook}> <img className={s.socialIcons} src={facebook} alt=""/></a> : ''}*/}
                {/*{props.profile.contacts.website ? <a href={props.profile.contacts.website}> <img className={s.socialIcons} src={website} alt=""/></a> : ''}*/}
                {/*{props.profile.contacts.vk ? <a href={props.profile.contacts.vk}> <img className={s.socialIcons} src={vk} alt=""/></a> : ''}*/}
                {/*{props.profile.contacts.twitter ? <a href={props.profile.contacts.twitter}> <img className={s.socialIcons} src={twitter} alt=""/></a> : ''}*/}
                {/*{props.profile.contacts.instagram ? <a href={props.profile.contacts.instagram}> <img className={s.socialIcons} src={insta} alt=""/></a> : ''}*/}
                {/*{props.profile.contacts.youtube ? <a href={props.profile.contacts.youtube}> <img className={s.socialIcons} src={youtube} alt=""/></a> : ''}*/}
                {/*{props.profile.contacts.github ? <a href={props.profile.contacts.github}> <img className={s.socialIcons} src={git} alt=""/></a> : ''}*/}
                {/*{props.profile.contacts.mailLink ? <a href={props.profile.contacts.mailLink}> <img className={s.socialIcons} src={mail} alt=""/></a> : ''}*/}
            </div>

        </div>
    );
};

export default ProfileInfo;