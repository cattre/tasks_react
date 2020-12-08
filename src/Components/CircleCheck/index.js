import React, {Component} from "react";

export class CircleCheck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            completed: this.props.data.completed
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = async (event) => {
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({completed: !this.state.completed})
        }
        await fetch('http://localhost:3001/task/'+ this.props.data._id, requestOptions)
        this.setState({completed: !this.state.completed})
        this.props.updateData()
    }

    render() {
        if(this.state.completed) {
            return (
                <div>
                    <input type='checkbox'
                           className='checkbox-round'
                           checked
                           onChange={this.handleChange}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <input type='checkbox'
                           className='checkbox-round'
                           onChange={this.handleChange}
                    />
                </div>
            )
        }
    }
}
