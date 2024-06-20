import { Component } from 'react'

export default class CounterProject extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    state = {
        count: 0
    }
    increasedCount = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decreasedCount = () => {
        this.setState({ count: this.state.count - 1 });
    }
    reset = () => {
        this.setState({ count: 0 });
    }
    render() {
        return (
            <>
                <div>CounterProject {this.state.count}</div>
                <button onClick={this.increasedCount}>Increment</button>
                <br />
                <br />
                <button onClick={this.reset}>Reset</button> <br /><br />
                <button onClick={this.decreasedCount}>Decrement</button>
            </>
        )
    }
}
