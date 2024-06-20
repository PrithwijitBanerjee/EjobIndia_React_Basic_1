import { useEffect, useRef, useState } from "react"

const Hook_Example2 = () => {
  const [count, setCount] = useState(0);

  const headingRef = useRef(); // generates an unique id to target the DOM elements 

  useEffect(() => {
    // headingRef.current.innerText = 'count value: ' + count;
    // document.title = count;

    const timerId = setTimeout(() => {
      headingRef.current.innerText = 'count value: ' + count;
      document.title = count;
    }, 2000);
    return () => { // componentWillUnmount() ...
      clearTimeout(timerId);
    }
  }, [count]);
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>update count</button>
      <h3 ref={headingRef}>loading...</h3>
    </div>
  )
}

export default Hook_Example2