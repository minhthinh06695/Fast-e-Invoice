import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? (element === "/" ? "/Main" : element) : <Navigate to="/" />;
};

export default ProtectedRoute;
