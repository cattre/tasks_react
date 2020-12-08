import React, {Component} from "react";
import {Button} from "../Button";

export class EditTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskId: null,
            task: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.data !== this.props.data) {
            this.setState({
                taskId: this.props.data._id,
                task: this.props.data.task
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            task: event.target.value
        })
    }

    handleSubmit = async (event) => {
        // event.preventDefault()
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({task: this.state.task})
        }
        await fetch('http://localhost:3001/task/' + this.state.taskId, requestOptions)
        this.props.navigate('Tasks')
    }

    handleDelete = async (event) => {
        // event.preventDefault()
        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        }
        let response = await fetch('http://localhost:3001/task/' + this.state.taskId, requestOptions)
        let data = await response.json()
        // debugger
        console.log(data)
        this.props.navigate('Tasks')
    }

    render() {
        if (this.props.data) {
            return (
                <div>
                    <div className='row justify-content-md-center'>
                        <div className='form-group col-lg-4'>
                            <input className='form-control'
                                   type='text'
                                   name='task'
                                   value={this.state.task}
                                   onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className='row justify-content-md-center'>
                        <div className='form-group col-lg-2'>
                            <Button name={'Update task'} class={'btn btn-success'} buttonClick={this.handleSubmit} />
                        </div>
                        <div className='form-group col-lg-2'>
                            <Button name={'Delete task'} class={'btn btn-danger'} buttonClick={this.handleDelete} />
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}