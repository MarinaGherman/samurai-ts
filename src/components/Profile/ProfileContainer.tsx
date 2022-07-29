import React, {Component} from 'react';
import Profile from "./Profile";
import { connect } from 'react-redux';
import {getStatus, getUserProfile, ProfileType, savePhoto, saveProfile, updateStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";


type pathUserIdType={
    userId:number
}

type mapStateToPropsType =  {
    profile:ProfileType
    status:string
    savePhoto:any
    saveProfile:any
}
type mapDispatchPropsType =  {
    getUserProfile:any
    getStatus:any
    updateStatus:any

}
type ownPropsType = mapStateToPropsType & mapDispatchPropsType

type PropsType = RouteComponentProps<pathUserIdType> & ownPropsType


class ProfileContainer extends Component<PropsType, any> {

    refreshProfile () {
        let userId:number = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push('./login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    componentDidMount() {
       this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<any>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId ){
            this.refreshProfile()
        }
    }

    render() {
        return (
            <>
              <Profile
                  {...this.props}
                  isOwner={!this.props.match.params.userId}
                  profile={this.props.profile}
                  status={this.props.status}
                  updateStatus={this.props.updateStatus}
                  savePhoto={this.props.savePhoto}
                  saveProfile={this.props.saveProfile}
              />
            </>
        );
    }
}


let mapStateToProps = (state:AppStateType) => {
    return{
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile
    }),
    withRouter,
    withAuthRedirect)(ProfileContainer)
