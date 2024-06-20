// import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (!isAuthenticated) {
        // User not logged in, redirect to login page
        return <Navigate to="/login" />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.any
};

export default ProtectedRoute