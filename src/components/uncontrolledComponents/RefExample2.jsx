import { useRef } from "react"


const RefExample2 = () => {
  const myRef = useRef(0);
  const handleBtn = () => {
        myRef.current = myRef.current + 1;
        alert(`you clicked ${myRef.current} times`);
  }  
  return (
    <button onClick={() => handleBtn()}>click me</button>
  )
}

export default RefExample2