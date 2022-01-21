import React, {Component} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: any
}

class ProfileStatus extends Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange =(e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value

        })
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                        ? <div>
                    <span onDoubleClick={this.activateEditMode}>{
                        this.props.status}</span>
                        </div>
                        : <div>
                            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={
                                this.state.status || "-----"  }/>
                        </div>
                }


            </div>
        );
    }
}

export default ProfileStatus;