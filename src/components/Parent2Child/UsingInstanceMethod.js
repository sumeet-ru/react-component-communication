import React, { Component } from 'react'
export default class UsingInstanceMethod extends Component {
    componentDidMount() {
        this.foo.changeName('Mark');
    }
    render() {
        return (
            <div>
                <ChildComponent ref={ref => this.foo = ref}/>
            </div>
        )
    }
}
class ChildComponent extends Component {
    constructor() {
        super();
        this.state = {name: ''};
    }
    changeName(name) {
        this.setState({name});
    }
    render() {
        return (
            <h1>Hi {this.state.name}</h1>
        );
    }
}

