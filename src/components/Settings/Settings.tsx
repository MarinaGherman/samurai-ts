import React from 'react';
import {Box, Button, Checkbox, FormControlLabel, TextField} from "@mui/material";

import s from './Settings.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {Formik} from "formik";
import {ProfileType, updateProfileTC} from "../../redux/profileReducer";
import {useHistory, useParams} from "react-router-dom";

const Settings = () => {
    // @ts-ignore
    const profile = useSelector(state => state.profilePage.profile);
    const dispatch = useDispatch();
    const history = useHistory();
    const { userId } = useParams();

    return (
        <Box>
            <h3>Edit profile</h3>

            <Formik enableReinitialize={true}
                    initialValues={{
                        userId: userId,
                        lookingForAJob: profile && profile.lookingForAJob,
                        lookingForAJobDescription: profile &&  profile.lookingForAJobDescription,
                        fullName: profile &&  profile.fullName,
                        aboutMe: profile &&  profile.aboutMe,
                        contacts: {
                            facebook: profile &&  profile.contacts.facebook,
                            website: profile &&  profile.contacts.website,
                            vk: profile &&  profile.contacts.vk,
                            twitter: profile &&  profile.contacts.twitter,
                            instagram: profile &&  profile.contacts.instagram,
                            youtube: profile &&  profile.contacts.youtube,
                            github: profile &&  profile.contacts.github,
                            mainLink: profile &&  profile.contacts.mainLink,
                        }

                    }}

                    onSubmit={
                        values => {
                            debugger;
                            dispatch(updateProfileTC(values as ProfileType));
                            console.log(values)
                            // history.push('/profile');
                        }
                    }>

                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <div className={s.formRow}>
                            <div className={s.contactText}>Github: </div>
                            <TextField inputProps={{ className: s.textField }}
                                       size={"small"}
                                       type="text"
                                       name={"contacts.github"}
                                       onChange={props.handleChange}
                                       onBlur={props.handleBlur}
                                       value={props.values.contacts.github}
                                       error={!!props.errors.contacts?.github}
                                       helperText={props.errors.contacts?.github}
                            />
                        </div>
                        <div className={s.formRow}>
                            <div className={s.contactText}>Facebook: </div>
                            <TextField inputProps={{ className: s.textField }}
                                       size={"small"}
                                       type="text"
                                       name={"contacts.facebook"}
                                       onChange={props.handleChange}
                                       onBlur={props.handleBlur}
                                       value={props.values.contacts.facebook}

                            />
                        </div>
                        <div className={s.formRow}>
                            <div className={s.contactText}>VK: </div>
                            <TextField inputProps={{ className: s.textField }}
                                       size={"small"}
                                       type="text"
                                       name={"contacts.vk"}
                                       onChange={props.handleChange}
                                       onBlur={props.handleBlur}
                                       value={props.values.contacts.vk}

                            />
                        </div>
                        <div className={s.formRow}>
                            <div className={s.contactText}>Instagram: </div>
                            <TextField inputProps={{ className: s.textField }}
                                       size={"small"}
                                       type="text"
                                       name={"contacts.instagram"}
                                       onChange={props.handleChange}
                                       onBlur={props.handleBlur}
                                       value={props.values.contacts.instagram}


                            />
                        </div>
                        <div className={s.formRow}>
                            <div className={s.contactText}>Twitter: </div>
                            <TextField inputProps={{ className: s.textField }}
                                       size={"small"}
                                       type="text"
                                       name={"contacts.twitter"}
                                       onChange={props.handleChange}
                                       onBlur={props.handleBlur}
                                       value={props.values.contacts.twitter}

                            />
                        </div>
                        <div className={s.formRow}>
                            <div className={s.contactText}>YouTube: </div>
                            <TextField inputProps={{ className: s.textField }}
                                       size={"small"}
                                       type="text"
                                       name={"contacts.youtube"}
                                       onChange={props.handleChange}
                                       onBlur={props.handleBlur}

                            />
                        </div>
                        <div className={s.formRow}>
                            <div className={s.contactText}>WebSite: </div>
                            <TextField inputProps={{ className: s.textField }}
                                       size={"small"}
                                       type="text"
                                       name={"contacts.website"}
                                       onChange={props.handleChange}
                                       onBlur={props.handleBlur}

                            />
                        </div>
                        <div className={s.formRow}>
                            <div className={s.contactText}>Main link: </div>
                            <TextField inputProps={{ className: s.textField }}
                                       size={"small"}
                                       type="text"
                                       name={"contacts.mainLink"}
                                       onChange={props.handleChange}
                                       onBlur={props.handleBlur}

                            />
                        </div>
                        <div className={s.formRow}>
                            <div className={s.contactText}>About me: </div>
                            <TextField inputProps={{ className: s.textField }}
                                       multiline={true}
                                       size={"small"}
                                       type="text"
                                       name={"aboutMe"}
                                       onChange={props.handleChange}
                                       onBlur={props.handleBlur}
                                       value={props.values.aboutMe}

                            />

                        </div>
                        <div className={s.formRowWithoutMargin}>
                            <div className={s.contactText}>Full name: </div>
                            <TextField inputProps={{ className: s.textField }}
                                       size={"small"}
                                       type="text"
                                       name={"fullName"}
                                       onChange={props.handleChange}
                                       onBlur={props.handleBlur}
                                       value={props.values.fullName}

                            />
                        </div>
                        <div  className={s.formRowWithoutMargin}>

                            <FormControlLabel
                                labelPlacement={"start"}
                                label={'Looking for a job:'}
                                name={"lookingForAJob"}
                                control={<Checkbox/>}
                                checked={props.values.lookingForAJob}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className={s.formRow}>
                            <p className={s.contactText}>Job description: </p>
                            <TextField inputProps={{ className: s.textField }}
                                       multiline={true}
                                       size={"small"}
                                       name={"lookingForAJobDescription"}
                                       type="text"
                                       onChange={props.handleChange}
                                       onBlur={props.handleBlur}
                                       value={props.values.lookingForAJobDescription}
                            />
                        </div>


                        <div className={s.button}>
                            <Button variant={'contained'} type={"submit"}>Submit
                                changes</Button>
                        </div>
                    </form>
                )}

            </Formik>
            
        </Box>
    );
};

export default Settings;