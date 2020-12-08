import React, {Component} from "react";
import {Header} from "../Header";
import {SubHeader} from "../SubHeader";
import {List} from "../List";

export class TasksPage extends Component {

    constructor(props) {
        super(props);
        this.state = {data: null}
    }

    componentDidMount() {
        this.getTasks()
    }

    getTasks = () => {
        fetch('http://localhost:3001/task')
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({data: data.data})
            })
    }

    render() {
        return (
            <div>
                <Header name={'Tasks'}/>
                <div>
                    <List completed={false} data={this.state.data} updateData={this.getTasks} navigate={this.props.navigate}/>
                </div>
                <div>
                    <SubHeader name={'Completed'}/>
                    <List completed={true} data={this.state.data} updateData={this.getTasks} navigate={this.props.navigate}/>
                </div>
            </div>
        )
    }
}