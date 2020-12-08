import React, {Component} from "react";

export class SubHeader extends Component {

    render() {
        return (
            <header className='text-center'>
                <h2>{this.props.name}</h2>
            </header>
        )
    }
}