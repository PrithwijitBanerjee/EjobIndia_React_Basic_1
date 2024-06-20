import React, { Component, createRef } from 'react'

export default class RefExample extends Component {
    constructor() {
        super();
        this.ref1 = React.createRef(); // create an Reference
    }

    ref2 = createRef();

    render() {
        return (
            <>
                <h2 ref={this.ref1}>Uncontrolled Component</h2>
                <button onClick={() => this.ref1.current.innerHTML = '<i>This is Italic text</i>'}>click me</button>
                <h2 ref={this.ref2}>Uncontrolled Component</h2>
                <button onClick={() => this.ref2.current.innerText = 'This is normal text'}>click me</button>
            </>
        )
    }
}
