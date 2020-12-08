import React, {Component} from "react";

export class AddTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: '',
            completed: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        this.setState({task: event.target.value})
    }

    handleSubmit = async (event) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data: this.state})
        }
        const response = await fetch('http://localhost:3001/task/', requestOptions)
        const data = await response.json()
        console.log(data)
        this.setState({task: ''})
        this.props.updateData()
    }

    render() {
        if (!this.props.completed) {
            return (
                <tr>
                    <td>
                    </td>
                    <td>
                        <input className='form-control'
                               type='text'
                               name='task'
                               value={this.state.task}
                               onChange={this.handleChange}
                        />
                    </td>
                    <td>
                        <input type='submit'
                               className='btn btn-success'
                               value='Add task'
                               onClick={this.handleSubmit}
                        />
                    </td>
                </tr>
            )
        } else {
            return null
        }
    }
}