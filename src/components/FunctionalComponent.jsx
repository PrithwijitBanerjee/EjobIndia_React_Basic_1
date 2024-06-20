
// export default function FunctionalComponent() {
//     return (<>
//         <h1>This is normal function component</h1>
//     </>)
// }

import { useState } from "react"

const FunctionalComponent = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <>
            <h1>This is Arrow FunctionalComponent</h1>
            <h3>Name: {toggle ? 'John Doe' : 'Amir Khan'}</h3>
            <button onClick={() => {
                setToggle(!toggle);
            }}>toggle</button>
        </>
    )
}

export default FunctionalComponent