import { Component } from 'react'
import LifeCycleEx2Child from './LifeCycleEx2Child';

export default class LifeCycleEx2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            name: 'John Doe',
            emailId: 'john98@gmail.com'
        };
    }
    render() {
        return (
            <>
                {/* {
                    this.state?.status ? <LifeCycleEx2Child name={this.state.name} emailId={this.state.emailId} /> : null
                } */}
                {/* or syntax for conditional rendering .... */}
                {
                    this.state?.status && <LifeCycleEx2Child name={this.state.name} emailId={this.state.emailId} />
                }

                <button onClick={() => this.setState({
                    status: !this.state.status
                })}>{
                        this.state?.status ? 'unload' : 'load'
                    }</button>
            </>
        )
    }
}
