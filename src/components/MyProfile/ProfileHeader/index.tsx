import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { HeaderWrapper, UserCardDiv, UserInfoDiv } from './style';
import LabTabs from '../Tabs';
import { profileRoutes } from '../../../services';
import UserInfoContext from '../../../contexts/UserInfoContext';
import { UserInfo } from '../../../utils';

interface APIResponse<T> {
  data: T;
}

interface ProfileResponse {
  userInfo: UserInfo;
}

const ProfileHeader = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const { isLoading } = useQuery<APIResponse<ProfileResponse>>(
    ['profile'],
    async () => {
      const response = await profileRoutes.getAll();
      return response.data as unknown as APIResponse<ProfileResponse>;
    },
    {
      onSuccess: (data) => {
        setUserInfo(data.data.userInfo);
      },
    },
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeaderWrapper>
        <UserCardDiv>
          <Link to="/academy/my-profile">
            <img src={userInfo.avatar} alt={userInfo.username} />
          </Link>
        </UserCardDiv>
        <UserInfoDiv>
          <h2>{userInfo.full_name}</h2>
          <p>{userInfo.role}</p>
        </UserInfoDiv>
      </HeaderWrapper>
      <UserInfoContext.Provider value={userInfo}>
        <LabTabs />
      </UserInfoContext.Provider>
    </>
  );
};

export default ProfileHeader;
