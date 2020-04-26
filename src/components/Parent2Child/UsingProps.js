import React, { Component } from 'react'

export default class ParentComponentProps extends Component {
    constructor() {
        super();
        this.state = {name: 'Mark'};
    }
    render() {
        return (
            <div>
                <ChildComponent name="Sumeet" /> {/* For Static Value */}
                {/* Or */}
                <ChildComponent name={this.state.name} /> {/* For Dynamic Value */}
            </div>
        )
    }
}

class ChildComponent extends Component {
    render() {
        return (
            <h1>Hi {this.props.name}!</h1>
        )
    }
}