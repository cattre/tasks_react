import React, {Component} from "react";
import {Header} from "../Header";
import {EditTask} from "../EditTask";
import {Button} from "../Button";

export class EditPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                _id: this.props.taskId,
                task: '',
                completed: null
            }
        }
    }

    componentDidMount() {
        this.getTask()
    }

    getTask = () => {
        fetch('http://localhost:3001/task/' + this.state.data._id)
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({data: data.data[0]})
            })
    }

    buttonClick = () => {
        this.props.navigate('Tasks')
    }

    render() {
        return (
            <div className={'vertical-center'}>
                <div className={'container'}>
                    <Header name={'Edit task'}/>
                    <div className='text-light text-center'>
                        <EditTask
                            data={this.state.data}
                            navigate={this.props.navigate}
                        />
                        <Button name={'Back'} class={'btn btn-warning'} buttonClick={this.buttonClick} />
                    </div>
                </div>
            </div>
        )
    }
}