import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Set authentication status in local storage
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/dashboard');
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
};

export default LoginPage;
