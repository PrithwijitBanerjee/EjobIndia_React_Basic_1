// useref() hooks mainly used to persist the value of variable of previous render which can use uised in next re-renders...
// update the value of state varable may cause re-renders of component, but update the value of useRef() does not cause re-renders of component...
// useRef() hooks is used also in DOM manipulation in React, as React is declarative not imperative... 
// useRef() hooks is used in uncontrolled components in react ....

import { useEffect, useRef } from "react";
import { useState } from "react"


const UseRefTut = () => {
    const [count, setCount] = useState(0);
    const headingRef = useRef(); // create an reference id ...
    // let a = 0; // ordinary variable ...
    let a = useRef(0); // need to persist the value of a between each re-renders ...
    useEffect(() => {
        // a++;
        a.current = a.current + 1;
        console.log(`component is being rendered with count: ${count} with ordinary variable: ${a.current}`);
        headingRef.current.innerText = a.current; // DOM manipulation
    });
    return (
        <div>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
            </div>
            <div>
                <h2 ref={headingRef}></h2>
            </div>
        </div>
    )
}

export default UseRefTut