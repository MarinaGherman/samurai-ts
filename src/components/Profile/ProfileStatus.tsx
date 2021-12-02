import React, {Component} from 'react';

class ProfileStatus extends Component {
    // @ts-ignore
    state = {
        editMode: false,
        // @ts-ignore
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
        // @ts-ignore
        this.props.updateStatus(this.state.status)
    }
    onStatusChange =(e:any) => {
        this.setState({
            status: e.currentTarget.value

        })
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {

        // @ts-ignore
        if(prevProps.status !== this.props.status) {
            this.setState({
                // @ts-ignore
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
                        // @ts-ignore
                        this.props.status}</span>
                        </div>
                        : <div>
                            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={
                                // @ts-ignore
                                this.state.status || "-----"  }/>
                        </div>
                }


            </div>
        );
    }
}

export default ProfileStatus;