import { useRef } from "react";
import { useState } from "react"


const StopWatch = () => {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    const handleStartTime = () => {
        setStartTime(Date.now());
        setNow(Date.now());
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }
    const handleStopTime = () => {
        clearInterval(intervalRef.current);
    }
    let secondsPassed = 0;
    if (startTime !== null && now !== null) {
        secondsPassed = (now - startTime) / 1000;
    }
    return (
        <>
            <div>StopWatch Time Passed: {secondsPassed !== 0 && secondsPassed.toFixed(3)}</div>
            <button onClick={() => handleStartTime()}>Start</button>
            <button onClick={() => handleStopTime()}>Stop</button>
        </>
    )
}

export default StopWatch