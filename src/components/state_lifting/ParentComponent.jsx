import { useState } from "react";
import ChildComp from "./ChildComp";

const ParentComponent = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <ChildComp count={count} setCount={setCount} />
        </div>
    )
}

export default ParentComponent