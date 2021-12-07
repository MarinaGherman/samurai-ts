import React, {Component} from 'react';
import Profile from "./Profile";
import { connect } from 'react-redux';
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type pathUserIdType={
    userId:number
}

type mapStateToPropsType =  {
    profile:ProfileType
    status:string
}
type mapDispatchPropsType =  {
    getUserProfile:any
    getStatus:any
    updateStatus:any
}
type ownPropsType = mapStateToPropsType & mapDispatchPropsType

type PropsType = RouteComponentProps<pathUserIdType> & ownPropsType


class ProfileContainer extends Component<PropsType> {

    componentDidMount() {
        let userId:number = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return (
            <>
              <Profile
                  {...this.props}
                  profile={this.props.profile}
                  status={this.props.status}
                  updateStatus={this.props.updateStatus}
              />
            </>
        );
    }
}


let mapStateToProps = (state:any) => {
    return{
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    withAuthRedirect)(ProfileContainer)
