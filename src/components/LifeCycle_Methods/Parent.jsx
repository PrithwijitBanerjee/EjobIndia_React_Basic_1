import { Component } from 'react'
import ErrorBoundary from './ErrorBoundary';

class Header extends Component {
    constructor(props) {
        super(props);
        throw new Error('Something Went Wrong!!!');
    }
    render() {
        return (<>
            <h2>Header</h2>
        </>)
    }
}

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<>
            <h2>Footer</h2>
        </>)
    }
}

export default class Parent extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     isError: false,
        //     errMsg: ''
        // }

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
        // if (this.state?.isError) {
        //     return <h2>{this.state?.errMsg}</h2>
        // }
        return (
            <>
                <h2>Parent</h2>
                <ErrorBoundary>
                    <Header />
                </ErrorBoundary>
                <Footer />
            </>
        )
    }
}
