import React, {Component} from 'react';
import Profile from "./Profile";
import { connect } from 'react-redux';
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import { withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {
    componentDidMount() {
        // @ts-ignore
        let userId:number = this.props.match.params.userId;
        if(!userId) {
            userId = 20042;
        }
        // @ts-ignore
        this.props.getUserProfile(userId);
        // @ts-ignore
        this.props.getStatus(userId)

    }

    render() {

        return (
            <>

              <Profile
                  {...this.props}
                  //@ts-ignore
                  profile={this.props.profile}
                  //@ts-ignore
                  status={this.props.status}
                  //@ts-ignore
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
