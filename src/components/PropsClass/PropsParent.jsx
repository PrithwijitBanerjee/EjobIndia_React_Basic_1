import { Component } from 'react'
import PropsChild from './PropsChild'

export default class PropsParent extends Component {

  state ={
        name: 'John Doe',
        course: 'MERN Stack App'
  }  
  render() {
    return (
        <>
             <div>PropsParent</div>
             <PropsChild name={this.state?.name} crs={this.state?.course}/>
        </>
    )
  }
}
