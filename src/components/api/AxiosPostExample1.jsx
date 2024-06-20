import { useState } from 'react';
import axios from 'axios';

export default function AxiosPostExample1() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');

    const handleLogin = () => {
        axios.post('https://reqres.in/api/login', { username: username, password: password })
            .then((response) => {
                localStorage.setItem('tokenid', response.data.token);
                setStatus('User is valid!');

                setUsername('');
                setPassword('');
            })
            .catch((error) => {
                setStatus('Invalid username or password.' + error?.message);
            });
    };

    return (
        <div>
            <h2>Login</h2>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>{status}</div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
