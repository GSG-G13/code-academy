import { useState, useEffect } from 'react';

import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

import { DecodeJwtType, LoggedUserObjectType } from '../utils/helpers';

const useAuth = () => {
  const [user, setUser] = useState<LoggedUserObjectType>({
    userId: null,
    userName: null,
    userEmail: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token: string | undefined = Cookies.get('token');

    if (token) {
      const decode: DecodeJwtType = jwtDecode(token);
      if (decode) {
        const { id, username, email } = decode;

        setUser({
          userId: id,
          userName: username,
          userEmail: email,
        });
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
