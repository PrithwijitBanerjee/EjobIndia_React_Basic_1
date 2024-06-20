import { useEffect, useRef, useState } from "react"

const Hook_Example3 = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const emailRef = useRef();
    const nameRef = useRef();
    const handleInput = e => {
        if (e.target.name === 'em') {
            setEmail(e.target.value);
        }
        if (e.target.name === 'nm') {
            setName(e.target.value);
        }
    };

    useEffect(() => {
        console.log('useEffect Called ...');
        setTimeout(() => {
            nameRef.current.innerText = 'Name: ' + name;
            emailRef.current.innerText = 'Email Id: ' + email;
        }, 3000);

    }, [name, email]);
    return (
        <div>
            <input type="email" name="em" placeholder="email id" onChange={handleInput} /><br />
            <input type="text" name="nm" placeholder="name" onChange={handleInput} /><br />
            <h3 ref={emailRef}>Email Id: loading...</h3>
            <h3 ref={nameRef}>Name: loading...</h3>
        </div>
    )
}

export default Hook_Example3