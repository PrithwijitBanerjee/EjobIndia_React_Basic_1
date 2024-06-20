import { Component } from 'react'
import PropTypes from 'prop-types';
export default class PropsChild extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div>PropsChild</div>
                <h3>Name: {this?.props?.name}</h3>
                <h3>Course: {this.props?.crs}</h3>
            </>
        )
    }
}

PropsChild.propTypes = {
    name: PropTypes.string,
    crs: PropTypes.string
};
