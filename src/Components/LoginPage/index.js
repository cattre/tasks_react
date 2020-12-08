import React, {Component} from "react";

export class LoginPage extends Component {

    render() {
        return (
            <header>
                <h1>{this.props.name}</h1>
            </header>
        );
    }
}