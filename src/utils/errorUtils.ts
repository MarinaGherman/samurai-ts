import {AxiosError} from "axios";
import {AppThunkDispatch} from "../redux/redux-store";
import {setAppErrorAC, setAppStatusAC} from "../redux/app-reducer";
import {RespType} from "../api/api";

export const handleNetworkError = (Error: AxiosError<{ error: string }>, dispatch: AppThunkDispatch) =>{

    dispatch(setAppStatusAC("failed"));
    dispatch(setAppErrorAC(Error.response?.data.error || "some Error"));
}


export const handleServerAppError = <D>(data: RespType<D>, dispatch: AppThunkDispatch, ) =>{
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]));
    } else {
        dispatch(setAppErrorAC("Some error occupied"));
    }
    dispatch(setAppStatusAC("failed"));

}
export const handleServerNetworkError = (error:Error, dispatch:AppThunkDispatch) =>{
    dispatch(setAppErrorAC(error.message));
    dispatch(setAppStatusAC("failed"));

}