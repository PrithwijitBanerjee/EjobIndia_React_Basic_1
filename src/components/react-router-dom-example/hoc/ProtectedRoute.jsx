import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

const ProtectedRoute = ({ children }) => {
    const status = localStorage.getItem('isAuthenticated');

    if (!status) {
        return <Navigate to={'/'} />
    }
    return children;
}


ProtectedRoute.propTypes = {
    children: PropTypes.any
}
export default ProtectedRoute