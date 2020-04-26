import React, { Component } from 'react'
import { subject } from '../../service';

export default class AnyComponent1 extends Component {
    componentDidMount() {
        this.subscription = subject.subscribe(res => { // Subscribing to the service
            console.log(res);
        });
    }
    componentWillUnmount() {
        this.subscription.unsubscribe(); // Un-subscribing to avoid memory leak.
    }

    render() {
        return (
            <div>
                <h1>AnyComponent1</h1>
                <AnyComponent2 />
            </div>
        )
    }
}

class AnyComponent2 extends Component {
    sendMessage = () => {
        subject.next('Hi There!'); // Sending data to all subscribers
    }
    render() {
        return (
            <div>
                <h1>AnyComponent2</h1>
                <button onClick={this.sendMessage}>Send message</button>
            </div>
        )
    }
}