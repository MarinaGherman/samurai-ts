import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import profileReducer, {ProfileActionType} from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer, {UserActionType} from "./usersReducer";
import authReducer, {ActionAuthType} from "./auth-reducer";
import AppReducer, {appActionType} from "./app-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export type RootActionsType = ActionAuthType | appActionType  | ProfileActionType | UserActionType //сюда нужно добавлять свои типизации акшенов через или
export type AppThunkDispatch = ThunkDispatch<AppStoreType, null, RootActionsType>;
export type AppStoreType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector;
export const useAppDispatch: () => AppThunkDispatch = useDispatch;

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: AppReducer
});


let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

export default store;