/* eslint-disable react/no-children-prop */
import {
  ProfileUserComponent,
  ProfileTabComponent,
  ProfileInfoComponent,
} from '../../../components';
import MiniDrawer from '../../../components/Layout/layout';

const ProfileInfoPage = () => (
  <div>
    <MiniDrawer children={undefined} />

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
    <ProfileInfoComponent defaultName="shatha" defaultBirthdate={6 - 3 - 1999} />
  </div>
);

export default ProfileInfoPage;
