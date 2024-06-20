import { useState } from "react"


const HocCounterApp = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {/* <Counter />
            <Counter /> */}
            <HOCRed cmp={Counter} />
            <HOCGreen cmp={Counter} />
            <HOCYellow cmp={Counter} />
        </div>
    )
}

const HOCRed = (props) => {
    return (
        <div style={{ margin: '10px 0px', backgroundColor: 'red', color: 'white', width: '500px', height: '500px', padding: '20px' }}>
            <props.cmp />
        </div>
    )
}

const HOCGreen = (props) => {
    return (
        <div style={{ margin: '10px 0px', backgroundColor: 'green', color: 'white', width: '500px', height: '500px', padding: '20px' }}>
            <props.cmp />
        </div>
    )
}

const HOCYellow = (props) => {
    return (
        <div style={{ margin: '10px 0px', backgroundColor: 'yellow', color: 'white', width: '500px', height: '500px', padding: '20px' }}>
            <props.cmp />
        </div>
    )
}

const Counter = () => {
    const [count, setCount] = useState(0);
    return (<div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>increment</button>
    </div>)
}
export default HocCounterApp