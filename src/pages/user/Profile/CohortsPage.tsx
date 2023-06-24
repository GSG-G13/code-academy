/* eslint-disable react/no-children-prop */

import {
  ProfileUserComponent,
  ProfileTabComponent,
  CohortCardComponent,
} from '../../../components';
import MiniDrawer from '../../../components/Layout/layout';

const CohortsPage = () => (
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
    <CohortCardComponent />
  </div>
);

export default CohortsPage;
