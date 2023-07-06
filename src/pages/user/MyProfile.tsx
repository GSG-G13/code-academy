import { styled } from 'styled-components';
import ProfileHeader from '../../components/MyProfile';

const MyProfileContainer = styled.div`
  padding: 1rem 1rem;
`;

const MyProfile = () => (
  <MyProfileContainer>
    <ProfileHeader />
  </MyProfileContainer>
);

export default MyProfile;
