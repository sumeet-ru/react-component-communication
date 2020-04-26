import React, { Component } from 'react'

export default class UsingCallback extends Component {
    constructor() {
        super();
        this.state = {name: 'Sumeet'};
    }
    setName = (name) => {
        this.setState({name});
    }
    render() {
        return (
            <div>
                <h1>Hi {this.state.name}!</h1>
                <ChildComponent setName={this.setName}/>
            </div>
        )
    }
}
class ChildComponent extends Component {
    sendParent = () => {
        this.props.setName('John');
    }
    render() {
        return(
            <button onClick={this.sendParent}>Click Me</button>
        )
    }
}
