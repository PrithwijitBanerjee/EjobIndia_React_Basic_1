import {Component} from 'react'

// const ReactStyle = () => {
//   const style = {
//         container: {
//             backgroundColor: 'yellow',
//             color: 'white'
//         }
//   }  
//   return (
//     <div>
//         <h1 style={{backgroundColor: 'red', color: 'white', fontSize: '2em'}}>xyz </h1>
//         <h2 style={style.container}>abc</h2>
//     </div>
//   )
// }

// export default ReactStyle



export default class ReactStyle extends Component {
  style = {
        mainDiv: {
            backgroundColor: 'yellow',
            color: 'white'
        }
  };  
  render() {
    return (
      <div>
            <h1 style={{backgroundColor: 'red', color: 'white'}}>class component xyz</h1>
            <h1 style={this.style.mainDiv}>class component abc</h1>
      </div>
    )
  }
}
