import React from 'react';
import { UserInfo } from '../utils';

const UserInfoContext = React.createContext<UserInfo | null>(null);

export default UserInfoContext;
