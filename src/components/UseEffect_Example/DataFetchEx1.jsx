import { useEffect, useState } from "react"

const DataFetchEx1 = () => {
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);

    useEffect(() => {
        console.log('useEffect without dependency ...');
    });

    useEffect(() => {
        console.log('useEffect with empty dependency ...');
    }, []);

    useEffect(() => {
        console.log('useEffect with conditional dependency ...');

        return () => { // clean up code ....
                console.log('previous value 1: ', val1);
        }
    },[val1])
    return (
        <div>
            <h1>Value 1: {val1}</h1>
            <button className="mb-5" onClick={() => setVal1(val1 + 1)}>update value 1</button>
            <h1>Value 2: {val2}</h1>
            <button onClick={() => setVal2(val2 + 1)}>update value 2</button>
        </div>
    )
}

export default DataFetchEx1