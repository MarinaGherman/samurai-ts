import React from 'react';
import s from './ProfileInfo.module.scss'
import Loader from "../../../common/Loader";
import lookJob from "../../../../assets/images/lookJob.png";
import facebook from "../../../../assets/images/fb.png";
import website from "../../../../assets/images/global.png";
import  vk from "../../../../assets/images/vk.png";
import twitter from "../../../../assets/images/twitter.png";
import insta from "../../../../assets/images/instagram.png";
import youtube from "../../../../assets/images/youtube.png";
import git from "../../../../assets/images/github.png";
import mail from "../../../../assets/images/mail.png";


const ProfileInfo = (props:any) => {
    if(!props.profile) {
        return <Loader/>
    }
    return (
        <div className={s.main}>
            <div>
                <img src={props.profile.photos.large} />
                {
                    props.profile.lookingForAJob === true ? <div className={s.jobBlock}>
                        <div className={s.iconJobBlock}>
                            <img className={s.icon} src={lookJob} />
                        </div>
                        <h4>Описание работы</h4>
                        <p>{props.profile.lookingForAJobDescription}</p>
                    </div> : ''
                }
            </div>
            <div className={s.profileInfo}>
                <h2 className={s.name}>{props.profile.fullName}</h2>
                <h3>{props.profile.aboutMe}</h3>
            </div>
            <div className={s.contacts}>
                {props.profile.contacts.facebook ? <a href={props.profile.contacts.facebook}> <img className={s.socialIcons} src={facebook} alt=""/></a> : ''}
                {props.profile.contacts.website ? <a href={props.profile.contacts.website}> <img className={s.socialIcons} src={website} alt=""/></a> : ''}
                {props.profile.contacts.vk ? <a href={props.profile.contacts.vk}> <img className={s.socialIcons} src={vk} alt=""/></a> : ''}
                {props.profile.contacts.twitter ? <a href={props.profile.contacts.twitter}> <img className={s.socialIcons} src={twitter} alt=""/></a> : ''}
                {props.profile.contacts.instagram ? <a href={props.profile.contacts.instagram}> <img className={s.socialIcons} src={insta} alt=""/></a> : ''}
                {props.profile.contacts.youtube ? <a href={props.profile.contacts.youtube}> <img className={s.socialIcons} src={youtube} alt=""/></a> : ''}
                {props.profile.contacts.github ? <a href={props.profile.contacts.github}> <img className={s.socialIcons} src={git} alt=""/></a> : ''}
                {props.profile.contacts.mailLink ? <a href={props.profile.contacts.mailLink}> <img className={s.socialIcons} src={mail} alt=""/></a> : ''}
            </div>

        </div>
    );
};

export default ProfileInfo;