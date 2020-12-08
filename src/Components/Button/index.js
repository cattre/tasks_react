import React, {Component} from "react";

export class Button extends Component {

    render() {
        return (
            <button className={this.props.class} onClick={this.props.buttonClick}>
                {this.props.name}
            </button>
        )
    }
}