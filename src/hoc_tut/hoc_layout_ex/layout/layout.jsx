import '../styles/layout.css'
import Header from './Header';
import Sidebar from './Sidebar';

const layout = (Component) => {
    const WrappedComponent = ({ ...props }) => (
        <div className="app">
            <Header />
            <Sidebar />
            <main className="content">
                <div className="center-content">
                    {/* Your main content goes here */}
                    <h2>Welcome to My Website</h2>
                    <p>This is the main content area.</p>
                    <Component {...props} />
                </div>
            </main>
        </div>
    )
    return WrappedComponent;
}

export default layout;