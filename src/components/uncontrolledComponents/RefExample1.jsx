import { useEffect, useRef, useState } from "react";

const RefExample1 = () => {
    const [count, setCount] = useState(0);
    // let a = 0;
  const myRef = useRef(0);  

    useEffect(() => {
        // a++;
        // console.log("a: ",a);
        console.log(myRef.current);
        myRef.current = myRef.current + 1;
        console.log('component rendered');
    })
  return (
        <>
            <div>Count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </>

  )
}

export default RefExample1;