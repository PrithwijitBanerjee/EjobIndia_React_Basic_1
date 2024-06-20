import React, { useState, useEffect } from 'react';

export default function fetch1() {
    const [users, setUsers] = useState([]); // State to store the user data
    const [isLoading, setIsLoading] = useState(true); // State to handle loading status
    const [error, setError] = useState(null); // State to handle any errors

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/user')
            .then(response => {
                console.log(response)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setUsers(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []); // Empty dependency array means this effect will only run once after the initial render

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
