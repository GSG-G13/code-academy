import { Outlet } from 'react-router-dom';
import { ProfileUserComponent, ProfileTabComponent } from '../../../components';

const MainPage = () => (
  <div>
    <ProfileUserComponent
      name="shatha"
      cohort={13}
      specialty="Web Development"
      imageUrl="https://example.com/profile-image.jpg"
      email="shathaamin63@gmail.com"
      github="https://github.com/Shatha-Amin"
      linkedin="https://github.com/Shatha-Amin"
    />
    <ProfileTabComponent />
    <Outlet />
  </div>
);

export default MainPage;
