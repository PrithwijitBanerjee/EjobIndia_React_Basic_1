import { useState } from "react"
import DimensionRes from "./DimensionRes";


const Dimension = () => {
    const [state, setState] = useState({
        amt: '',
        rate: '',
        time: ''
    });
    const [status, setStatus] = useState(false);
    const handleInput = e => {
        if (e.target.id === 'amt') {
            setState(prevState => {
                return { ...prevState, [e.target.id]: e.target.value }
            })
        } else if (e.target.id === 'rate') {
            setState(prevState => {
                return { ...prevState, [e.target.id]: e.target.value }
            })
        } else {
            setState(prevState => {
                return { ...prevState, [e.target.id]: e.target.value }
            })
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        setStatus(true);
    }

    const handleReset = (e) => {
        e.preventDefault();
        setState({
            amt: "",
            rate: "",
            time: ""
        });
        setStatus(false);
    };
    return (
        <>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <label htmlFor='principalAmt'>Principal Amt:</label>
                <input type="number" id="amt" value={state.amt} onChange={handleInput} /><br /> <br />
                <label htmlFor='rate'>Rate:</label>
                <input type="number" id="rate" value={state.rate} onChange={handleInput} /><br /> <br />
                <label htmlFor='time'>Time:</label>
                <input type="number" id="time" value={state.time} onChange={handleInput} /><br /> <br />
                <button type="submit">submit</button>
                <button type="reset">reset</button>
            </form>
            {
                (!!status) && <DimensionRes amt={+(state.amt)} rate={+(state.rate)} time={+(state.time)} />
            }
        </>
    )
}

export default Dimension