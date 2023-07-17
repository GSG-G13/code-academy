import { useContext } from 'react';
import UserInfoContext from '../../../contexts/UserInfoContext';
import { ProfileDetailsContainer, DetailsDiv } from './style';

const ProfileDetails = () => {
  const userInfo = useContext(UserInfoContext);
  return (
    <ProfileDetailsContainer>
      <DetailsDiv>
        <p>Full Name</p>
        <p>{userInfo?.full_name}</p>
      </DetailsDiv>
      <DetailsDiv>
        <p>Username</p>
        <p>{userInfo?.username}</p>
      </DetailsDiv>
      <DetailsDiv>
        <p>Gender</p>
        <p>{userInfo?.gender}</p>
      </DetailsDiv>
      <DetailsDiv>
        <p>Date Of Birth</p>
        <p>{userInfo?.dob}</p>
      </DetailsDiv>
    </ProfileDetailsContainer>
  );
};
export default ProfileDetails;
