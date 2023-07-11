import { useState, useEffect } from 'react';

import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

import { DecodeJwtType, LoggedUserObjectType } from '../utils/helpers';

const useAuth = () => {
  const [user, setUser] = useState<LoggedUserObjectType>({
    id: null,
    username: null,
    email: null,
    isAdmin: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token: string | undefined = Cookies.get('token');

    if (token) {
      const decode: DecodeJwtType = jwtDecode(token);
      if (decode) {
        setUser({ ...decode });
      }
    }

    setIsLoading(false);
  }, []);

  return {
    user,
    isLoading,
  };
};

export default useAuth;
