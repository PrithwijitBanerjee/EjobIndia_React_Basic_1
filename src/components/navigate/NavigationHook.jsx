import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Assuming HomePage is in the same directory
import ProfilePage from './ProfilePage'; // Another component for the profile page

export default function NavigationHook() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

