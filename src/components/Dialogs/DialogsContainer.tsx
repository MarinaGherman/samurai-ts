import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsReducer";
import Dialogs from './Dialogs';
import {connect} from "react-redux";

let mapStateToProps = (state:any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch:any) => {
    return {
        updateNewMessageBody: (body: any) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;