import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { userInfo, userToken, loading } = useSelector(
    (state) => state.auth
  );

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (userInfo) {
      setIsAuthenticated(true);
    }
  }, [userInfo]);

  if (loading) return <div>Loading...</div>;

  if (!isAuthenticated) {
    return (
      <div>
        <h1>Not Authenticated</h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Authenticated</h1>
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
