import { Component } from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            errMsg: ''
        }
    }

    static getDerivedStateFromError(error) {
        return {
            isError: true,
            errMsg: error.message
        };
    }
    
    // componentDidCatch(error, errorInfo) {
    //     console.log('error: ', error.message);
    //     console.log('error info :', errorInfo);
    //     this.setState({
    //         isError: true,
    //         errMsg: error?.message
    //     });
    // }

    render() {
        if (this.state?.isError) {
            return <h2>{this.state?.errMsg}</h2>
        }
        return (
            <div>
                {
                    this.props.children
                }
            </div>
        )
    }
}


ErrorBoundary.propTypes = {
    children: PropTypes.any
}