import { Component } from 'react'

export default class LifeCycle extends Component {
  constructor(props){
        super(props);
        this.state = {
            name: 'John Doe'
        };
        console.log('constructor called ... ');
  }  
  static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps called ...');
        return {name: props?.name};
  }

  UNSAFE_componentWillMount(){
        alert('component is loading now ...');
        console.log('componentWillMount is called ...');
  }
  componentDidMount()
  {
    console.log('componentDidMount is called ...');
  }
  changeName = () => {
    this.setState({
        name: 'Achyut Mitra'
    });
  }
  render() {
    console.log('rendered method is called ...');
    return (
      <div>
            <h2>Welcome All, {this.state.name}</h2>
            <button onClick={this.changeName}>update name</button>
      </div>
    )
  }

  shouldComponentUpdate(){
        console.log('shouldComponentUpdate is called ...');
        return true;
  }
  UNSAFE_componentWillUpdate() {
        alert('state value will be updated soon ....');
        console.log('componentWillUpdate is called ...');
  }
  componentDidUpdate(){
        alert('state value is updated ...');
        console.log('componentDidUpdate is called ...');
  }
  componentWillUnmount(){
        alert('component is about to unmount');
        console.log('componentWillUnmount is called ....');
  }
}
