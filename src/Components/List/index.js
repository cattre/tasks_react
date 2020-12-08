import React, {Component} from "react";
import Table from 'react-bootstrap/Table';
import {ListRow} from "../ListRow";
import {AddTask} from "../AddTask";

export class List extends Component {

    render() {
        if (this.props.data) {
            return (
                <Table className='table text-light container text-center'>
                    <thead>
                        <tr>
                            <th>Completed</th>
                            <th>Task</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data
                                .filter(task => {
                                    return task.completed === this.props.completed
                                })
                                .map(task => {
                                    return (
                                        <ListRow
                                            key={task._id}
                                            data={task}
                                            updateData={this.props.updateData}
                                            navigate={this.props.navigate}
                                        />
                                    )
                                })
                        }
                        <AddTask completed={this.props.completed} updateData={this.props.updateData}/>
                    </tbody>
                </Table>
            )
        } else {
            return (
                <h2 className='text-center'>
                    No tasks found
                </h2>
            )
        }
    }
}