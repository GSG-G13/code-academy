import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthProviderPropsType } from '../utils/helpers';
import useAuth from '../hooks';

const RequireAuthProvider: React.FC<AuthProviderPropsType> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user.id) {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    toast.error('you have Not Access');
    return <Navigate to="/academy/login/" />;
  }

  if (user.isAdmin) {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    toast.error('Try to login from admin page');
    return <Navigate to="/admin/login/" />;
  }

  return children;
};

export default RequireAuthProvider;
