// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage'; // You'll need to create this
import Dashboard from './Dashboard'; // This page is protected
import ProtectedRoute from './ProtectedRoute'
import Navbar from './Navbar';

export default function ExampleProtectedRoute() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute> } />
            </Routes>
        </BrowserRouter>
    );
}
