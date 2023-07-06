import { Link } from 'react-router-dom';
import { HeaderWrapper, UserCardDiv, UserInfoDiv } from './style';
import LabTabs from '../Tabs';

const ProfileHeader = () => (
  <>
    <HeaderWrapper>
      <UserCardDiv>
        <Link to="/academy/my-profile">
          <img src="/public/GSG.webp" alt="UserImg" />
        </Link>
      </UserCardDiv>
      <UserInfoDiv>
        <h2>Khaled Al Nabaheen</h2>
        <p>Student</p>
      </UserInfoDiv>
    </HeaderWrapper>
    <LabTabs />
  </>
);

export default ProfileHeader;
