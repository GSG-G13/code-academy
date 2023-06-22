import Providers from './Providers';
import { ProfileTabComponent, ProfileUserComponent, post } from './components';

const App = () => {
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
      <post />
    </Providers>
  );
};

// const Container = styled.div`
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Title = styled.h1`
//   color: ${({ theme }) => theme.colors.primary};
// `;

export default App;
