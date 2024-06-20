import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"


const Header = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(() => {
    if (JSON.parse(localStorage.getItem('isAuthenticated'))) {
      return true;
    }
    return false;
  });

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setStatus(false);
  }
  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', true);
    setStatus(true);
    navigate('/dashboard');
  }
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-white active" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/products">All Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/dashboard">Dashboard</Link>
              </li>
              {
                status ? (<li className="nav-item">
                  <Link className="nav-link active text-white" onClick={handleLogout} aria-current="page" to="/">Logout</Link>
                </li>) : (<li className="nav-item">
                  <Link className="nav-link active text-white" onClick={handleLogin} aria-current="page" to="/">Login</Link>
                </li>)
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header