// import React from 'react'
import { Outlet, Link } from "react-router-dom";
export default function About() {
  return (
    <div>
      <h2>About Page</h2>
      <nav>
        <Link to="team">Our Team</Link> |
        <Link to="company">Our Company</Link>
      </nav>
      <Outlet />
    </div>
  );
}
