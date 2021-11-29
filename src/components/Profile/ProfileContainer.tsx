import React, {Component} from 'react';
import Profile from "./Profile";
import { connect } from 'react-redux';
import {getUserProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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

// @ts-ignore

//закидываем данные из урла (создается новая контейнерная компонента которую уже добавляем в коннект)
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default withAuthRedirect(connect(mapStateToProps, {
    getUserProfile
})(WithUrlDataContainerComponent));
