import { Container } from '@mui/system';
import { Key, useState } from 'react';
import Providers from './Providers';
import ProfileCard from './components/Profile/PostsComponent';
import { ProfileTabComponent, ProfileUserComponent } from './components';

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: '1',
      author: 'John Doe',
      datePost: new Date(),
      cohort: 'Cohort 2023',
      state: 'Active',
      imageSrc: 'https://example.com/profile-image.jpg',
    },
    {
      id: '2',
      author: 'Jane Smith',
      datePost: new Date(),
      cohort: 'Cohort 2022',
      state: 'Inactive',
      imageSrc: 'https://example.com/profile-image.jpg',
    },
  ]);

  const user = {
    name: 'Vernon Dahmer',
    cohort: 13,
    speciality: 'Purchasing manager',
    imageUrl: 'https://ik.imagekit.io/crv83iwkz/person-img.jpg?updatedAt=1687303538443',
    email: 'shathaamin63@gmail.com',
    github: 'https://github.com/Shatha-Amin',
    linkedin:
      'https://www.linkedin.com/authwall?trk=qf&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2F',
  };

  return (
    <Providers>
      <ProfileUserComponent
        name={user.name}
        cohort={user.cohort}
        specialty={user.speciality}
        imageUrl={user.imageUrl}
        email={user.email}
        github={user.github}
        linkedin={user.linkedin}
      />
      <ProfileTabComponent />

      <Container>
        <h1>Posts</h1>
        {posts.map((post) => (
          <ProfileCard
            key={post.id}
            auther={post.author}
            datePost={post.datePost}
            cohort={post.cohort}
            state={post.state}
            imageSrc={post.imageSrc}
          />
        ))}
      </Container>
    </Providers>
  );
};

export default App;
