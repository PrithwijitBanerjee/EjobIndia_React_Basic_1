// import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul style={{display: 'ruby', listStyle: 'none'}}>
                <li style={{padding: '0px 20px'}}>
                    <Link to="/">Home</Link>
                </li>
                <li style={{padding: '0px 20px'}}>
                    <Link to="/about">About</Link>
                </li>
                <li style={{padding: '0px 20px'}}>
                    <Link to="/contacts">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

// ul {
//     display: ruby;
//     list-style: none;
//     /* padding: 73px; */
// }