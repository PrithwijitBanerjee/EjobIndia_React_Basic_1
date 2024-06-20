import { useEffect, useRef } from "react";
import { useState } from "react"


const Hook_Example4 = () => {
    const [email, setEmail] = useState('');
    const [loc, setLoc] = useState('');
    const emailRef = useRef();
    const locRef = useRef();

    const handleInput = e => {
        if (e.target.name === 'em') {
            setEmail(e.target.value);
        }
        if (e.target.name === 'loc') {
            setLoc(e.target.value);
        }
    }

    useEffect(() => {
        console.log('useEffect() called !!!');
        const timerId = setTimeout(() => {
            emailRef.current.innerHTML = `<i>${email}</i>`;
            locRef.current.innerHTML = `<i>${loc}</i>`;
            // emailRef.current.innerText = email;
            // locRef.current.innerText = loc;
        }, 2000);

        return () => { //clean up function ...
            clearTimeout(timerId);
        }
    }, [email, loc]);
    return (
        <div>
            EMAIL ID:
            <input type="email" name="em" onChange={handleInput} />
            <br /> <br />
            SELECT LOCATION:
            <select name="loc" onChange={handleInput}>
                <option value="">Select your location</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Pune">Pune</option>
                <option value="Chennai">Chennai</option>
                <option value="Noida">Noida</option>
            </select>
            <br /> <br /> <br />
            <table>
                <thead>
                    <tr>
                        <th>Email Id</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td ref={emailRef}>
                            <i>loading ...</i>
                        </td>
                        <td ref={locRef}>
                            <i>loading ...</i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Hook_Example4