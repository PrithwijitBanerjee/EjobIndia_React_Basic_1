import { Component } from 'react'


export default class ClassComponent extends Component {
    state = {
        id: 1,
        name: 'John Doe',
        age: 27,
        gender: 'male'
    };
    render() {
        return (<>
            <h1>This is Class Component</h1>
            <h2>Id: {this.state?.id}</h2>
            <h2>Name: {this.state?.name}</h2>
            <h2>Age: {this.state?.age}</h2>
            <h2>Gender: {this.state?.gender}</h2>
        </>)
    }
}