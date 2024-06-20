import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li className="li-item">
                        <Link to={'/'} className="list-item">Home</Link>
                    </li>
                    <li className="li-item">
                        <Link to={'/about'} className="list-item">About</Link>
                    </li>
                    <li className="li-item">
                        <Link to={'/services'} className="list-item">Services</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;