import { styled } from 'styled-components';
import Providers from './Providers';
import Profile from './components/Profile';

const App = () => (
  <Providers>
    <Container>
      <Profile
        imageSrc="https://intranet.cera-theme.com/wp-content/uploads/avatars/25/61029dbf0b3ea-bpfull.jpg"
        name="Shatha"
        role="Full Stack Developer"
      />
      <tabs />
    </Container>
  </Providers>
);

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const Title = styled.h1`
//   color: ${({ theme }) => theme.colors.primary};
// `;

export default App;
