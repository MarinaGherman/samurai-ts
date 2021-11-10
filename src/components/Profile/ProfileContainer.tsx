import React, {Component} from 'react';
import Profile from "./Profile";
import axios from "axios";
import { connect } from 'react-redux';
import {setUserProfile} from "../../redux/profileReducer";

class ProfileContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response: any) => {
                // @ts-ignore
                this.props.setUserProfile(response.data)
            });

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
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer);
