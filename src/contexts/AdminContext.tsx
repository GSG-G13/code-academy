import React from 'react';

import { Navigate } from 'react-router-dom';
import { AuthProviderPropsType } from '../utils/helpers';
import useAuth from '../hooks';

const RequireAuthAdminProvider: React.FC<AuthProviderPropsType> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user.isAdmin) {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default RequireAuthAdminProvider;
