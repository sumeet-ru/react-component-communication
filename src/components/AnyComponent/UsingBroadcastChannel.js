import React, { Component } from 'react'

export default class AnyComponent1 extends Component {
    constructor() {
        super();
        this.channel = new BroadcastChannel('react_connect'); // Created a BroadcastChannel
        
        this.channel.onmessage = res => {        //<-- Added message event listener
            if (res.data.to == 'component_1') {  //<-- Check message is for me or not
                console.log(res);                //<-- Log the response
            }
        }
    }
    sendMessage = () => {
        this.channel.postMessage({to: 'component_2', msg: 'Hi Component2'}); // Send message to component2
    }
    render() {
        return (
            <div>
                <h1>This is Component 1</h1>
                <button onClick={this.sendMessage}>Send messgae to Component2</button>
                <AnyComponent2 />
            </div>
        )
    }
}


class AnyComponent2 extends Component {
    constructor() {
        super();
        this.channel = new BroadcastChannel('react_connect'); // Created a BroadcastChannel

        this.channel.onmessage = res => {        //<-- Added message event listener
            if (res.data.to == 'component_2') {  //<-- Check message is for me or not
                console.log(res);                //<-- Log the response
            }
        }
    }
    sendMessage = () => {
        this.channel.postMessage({to: 'component_1', msg: 'Hi Component1'}); // Send message to component1
    }
    render() {
        return (
            <div>
                <h1>This is Component 2</h1>
                <button onClick={this.sendMessage}>Send messgae to Component1</button>
            </div>
        )
    }
}
