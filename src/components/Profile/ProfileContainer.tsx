import React, { useEffect} from 'react';
import Profile from "./Profile";
import  {useDispatch, useSelector} from 'react-redux';
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profileReducer";
import {useHistory, useParams} from "react-router-dom";

const ProfileContainer = ({ ...props }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userId } = useParams();

    // @ts-ignore
    const profile = useSelector(state => state.profilePage.profile);
    // @ts-ignore
    const status = useSelector(state => state.profilePage.status);
    // @ts-ignore
    const authorizedUserId = useSelector(state => state.auth.userId);
    // @ts-ignore
    const auth = useSelector(state => state.auth);
    console.log(auth)


    useEffect(() => {
        if (authorizedUserId) {
            dispatch(getUserProfile(parseInt(authorizedUserId)));
            dispatch(getStatus(parseInt(authorizedUserId)));
        } else {
            history.push('/login')
        }
    },[authorizedUserId, dispatch, history])

        return (
            <>
              <Profile
                  {...props}
                  isOwner={!userId}
                  profile={profile}
                  status={status}
                  updateStatus={updateStatus}
                  savePhoto={savePhoto}
                  saveProfile={saveProfile}
              />
            </>
        );
}
export default ProfileContainer;
