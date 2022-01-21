import React, {useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: any

}

const ProfileStatusWithHooks = (props:ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateMode = () => {
        setEditMode(true)
    }
    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus( e.currentTarget.value)
    }
    const deactivateEditMode = () => {
        setEditMode( false)
        props.updateStatus(status)
    }


        return (
            <div>
                { !editMode && <span onDoubleClick={activateMode}>{props.status || "-----"}</span>}
                { editMode &&
                    <input
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status}
                    />}
            </div>
        );

}

export default ProfileStatusWithHooks;