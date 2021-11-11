import React, {Component} from 'react';
import Profile from "./Profile";
import axios from "axios";
import { connect } from 'react-redux';
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {
    componentDidMount() {
        // @ts-ignore
        let userId:number = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

// @ts-ignore

//закидываем данные из урла (создается новая контейнерная компонента которую уже добавляем в коннект)
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile
})(WithUrlDataContainerComponent);
