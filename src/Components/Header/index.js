import React, {Component} from "react";

export class Header extends Component {

    render() {
        return (
            <header className='text-center'>
                <h1>{this.props.name}</h1>
            </header>
        )
    }
}