import React from 'react';
import { useUser, SignedIn, SignedOut } from '@clerk/clerk-react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home'; // Adjusted import based on standard naming conventions
import SignInPage from '../Pages/signIn';
 // Adjusted import based on standard naming conventions

const ProtectedRoute = () => {
  const { user } = useUser();

  console.log(user)

  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />

      <Route path="/signIn" element={<SignInPage />} />

 
      <Route element={user ? <SignedInRoutes /> : <SignedOutRoutes />} />
    </Routes>
  );
};

// Define separate components for SignedIn and SignedOut routes
const SignedInRoutes = () => (
  <Routes>
    {/* Navigate to /home when user is signed in */}
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home />} />
    {/* Add more routes for signed-in users as needed */}
  </Routes>
);

const SignedOutRoutes = () => (
  <Routes>
    {/* Navigate to /signIn when user is signed out */}
    <Route path="/" element={<Navigate to="/signIn" />} />
    <Route path="/signIn" element={<SignInPage />} />
    {/* Add more routes for signed-out users as needed */}
  </Routes>
);

export default ProtectedRoute;
