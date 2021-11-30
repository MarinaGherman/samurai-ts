import React, {Component} from 'react';
import Profile from "./Profile";
import { connect } from 'react-redux';
import {getUserProfile} from "../../redux/profileReducer";
import { withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {
    componentDidMount() {
        // @ts-ignore
        let userId:number = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        // @ts-ignore
        this.props.getUserProfile(userId);

    }

    render() {

        return (
            <>

              <Profile
                  {...this.props}
                  //@ts-ignore
                  profile={this.props.profile}
              />
            </>
        );
    }
}
let mapStateToProps = (state:any) => {
    return{
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export default  compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect)(ProfileContainer)
