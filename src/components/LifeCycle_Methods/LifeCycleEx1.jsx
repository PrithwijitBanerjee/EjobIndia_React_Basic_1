import { Component, createRef } from 'react'

export default class LifeCycleEx1 extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: 'Welcome to EJOB India',
        course: 'course coming soon ...'
    }
    this.timerId = null;
  }  
  myRef = createRef();
  componentDidMount(){
    this.timerId = setTimeout(() => {
            this.setState({
                name: 'EjobIndia is located in kolkata',
                course: 'MERN STACK App'
            })
    },3000);
  }
  componentDidUpdate(){
            this.myRef.current.innerText = 'component updated ...';
  }
  componentWillUnmount(){
        clearTimeout(this.timerId);
  }
  render() {
    return (
        <>
            <h1>Hello ! {this.state.name}</h1>
            <h2>{this.state.course}</h2>
            <h3 ref={this.myRef}></h3>
        </>
    )
  }
}
