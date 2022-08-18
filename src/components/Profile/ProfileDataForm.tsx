import React from 'react';
import {createField, Input, Textarea} from "../common/formsControls/FormsControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({handleSubmit,profile}:any) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <b>Full name: </b> {createField("Full name", Input,"fullName", [] )}
            </div>
            <div>
                <b>Looking for a job: </b> {createField("", Input,"lookingForAJob", [],  {type: "checkbox"} )}
            </div>
                <div>
                    <b>My skills:</b> {createField("Job Description", Textarea,"lookingForAJobDescription", [] )}
                </div>

            <div>
                <b>About me:</b> {createField("About me", Textarea,"aboutMe", [] )}
            </div>
                <b>Contacts:</b>

            {Object.keys(profile.contacts).map(key => {
            return <div>
                           <b>{key}:</b>   {createField("key", Input,"contacts." + key, [] )}
                    </div>})}
                <div>
                    <button>Save</button>
                </div>

        </form>

    );
};
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'}) (ProfileDataForm)
export default ProfileDataFormReduxForm;