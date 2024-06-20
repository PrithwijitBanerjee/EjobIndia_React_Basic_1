import { useEffect, useRef, useState } from 'react'


// use cases of useRef() in react ...
// 1. In react if we want a data that is to be persisted between each re-renders, we use useRef(initialValue)
// 2. In react if we want to manipulate DOM elements, we can use useRef() hooks, which creates an empty reference object which is assigned to the particular DOM elements to target that elements.
// 2. In react, if we update the state variable, the component will re-render again, but if we update the ref variable the component will not re-render again.


// 2. scenario 1: 
// -------------------------------------------------------------------------------------------------------------------------
const FunctionalRefExample = () => {
    // let a = 0;
    const [val, setVal] = useState(0);
    const a = useRef(0);
    console.log('a in functional comp: ', a.current);
    useEffect(() => {
        // let a = 0;
        // a++;
        // console.log('a: ', a);
        a.current = a.current + 1; //Assignments to the 'a' variable from inside React Hook useEffect will be lost after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property. Otherwise, you can move this variable directly inside useEffect.
        console.log('a: ', a.current);
    }, [val]);
    return (
        <div>
            <button onClick={() => setVal(val + 1)}>update val</button>
        </div>
    )
}

// 2. scenario 2: 
// -------------------------------------------------------------------------------------------------------------------------
// const FunctionalRefExample = () => {
//     const ref = useRef();
//     return (
//         <div>
//             <h2 ref={ref}>Uncontrolled Component</h2>
//             <button onClick={() => ref.current.innerHTML = '<i>this is italic text</i>'}>click me</button>
//         </div>
//     )
// }


export default FunctionalRefExample