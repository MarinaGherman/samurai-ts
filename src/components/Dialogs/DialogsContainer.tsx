import {sendMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";
import {AppStateType} from "../../redux/redux-store";


let mapStateToProps = (state:AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: (arg0: { type: string; body?: string; }) => void) => {
    return {

        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageActionCreator(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect)(Dialogs)