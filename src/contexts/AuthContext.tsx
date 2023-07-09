import React from 'react';

import { Navigate } from 'react-router-dom';
import { AuthProviderPropsType } from '../utils';
import useAuth from '../hooks';

const RequireAuthProvider: React.FC<AuthProviderPropsType> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return user.userId ? (
    children
  ) : (
    <Navigate to="/academy/login" />
  );
};

export default RequireAuthProvider;
