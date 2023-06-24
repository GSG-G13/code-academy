import React from 'react';
import MiniDrawer from '../../components/Layout/layout';
import Search from '../../components/Search';
import Image from '../../components/Image';
import ProfileUserComponent from './ProfileUserComponent';
import ProfileTabComponent from './ProfileTabComponent';

const PostsPage = () => {
  return (
    <div>
      <MiniDrawer children={undefined} />
      <Image/>
      <Search />
      <ProfileUserComponent
        name="shatha"
        cohort={2023}
        specialty="Web Development"
        imageUrl="https://example.com/profile-image.jpg"
        email="johndoe@example.com"
        github="https://github.com/johndoe"
        linkedin="https://linkedin.com/in/johndoe"
      />
      <ProfileTabComponent />
    </div>
  );
};

export default PostsPage;
