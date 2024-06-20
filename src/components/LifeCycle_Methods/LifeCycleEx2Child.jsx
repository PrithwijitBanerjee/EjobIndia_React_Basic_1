import { Component } from 'react'
import PropTypes from 'prop-types'
export default class LifeCycleEx2Child extends Component {
    constructor(props) {
        super(props);
        console.log('child class constructor called ...');
    }

    UNSAFE_componentWillMount() {
        alert('child component is loading ...');
    }
    componentWillUnmount() {
        alert('child component is about to unmount ....');
    }
    render() {
        return (
            <div>
                <h2>Name: {this.props?.name}</h2>
                <h2>Email Id: {this.props?.emailId}</h2>
            </div>
        )
    }
}


LifeCycleEx2Child.propTypes = {
    name: PropTypes.string,
    emailId: PropTypes.string
}
