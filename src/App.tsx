<<<<<<< HEAD
import { Container } from '@mui/system';
import { useState } from 'react';
import Providers from './Providers';
import { ProfileUserComponent, ProfileTabComponent, ProfileCard } from './components';
=======
import Providers from './Providers';
import { ProfileTabComponent, ProfileUserComponent, post } from './components';
>>>>>>> main

const App = () => {
  const user = {
    name: 'shatha',
    cohort: 13,
    speciality: 'Purchasing manager',
    imageUrl: 'https://ik.imagekit.io/crv83iwkz/person-img.jpg?updatedAt=1687303538443',
    email: 'shathaamin63@gmail.com',
    github: 'https://github.com/Shatha-Amin',
    linkedin:
      'https://www.linkedin.com/authwall?trk=qf&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2F',
  };

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
      {/* <div>
        <ProfileInfoForm defaultName={undefined} defaultBirthdate={undefined} />
      </div> */}
      {/* <GroupsPage /> */}
    </Providers>
  );
};

<<<<<<< HEAD
=======
// const Container = styled.div`
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Title = styled.h1`
//   color: ${({ theme }) => theme.colors.primary};
// `;
import { RouterProvider } from 'react-router-dom';
import Providers from './Providers';
import router from './router';

const App = () => (
  <Providers>
    <RouterProvider router={router} />
  </Providers>
);

>>>>>>> main
export default App;
