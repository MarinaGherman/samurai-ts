import React, {Component} from 'react';

class ProfileStatus extends Component {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                        ? <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{
                        // @ts-ignore
                        this.props.status}</span>
                        </div>
                        : <div>
                            <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={
                                // @ts-ignore
                                this.props.status}/>
                        </div>
                }


            </div>
        );
    }
}

export default ProfileStatus;