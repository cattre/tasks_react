import React, {Component} from "react";
import {CircleCheck} from "../CircleCheck";

export class ListRow extends Component {

    handleClick = () => {
        this.props.navigate('Edit', this.props.data._id)
    }

    render() {
        return (
            <tr className='task'>
                <td>
                    <CircleCheck
                        data={this.props.data}
                        updateData={this.props.updateData}
                    />
                </td>
                <td onClick={this.handleClick}>{this.props.data.task}</td>
                <td></td>
            </tr>
        )
    }
}