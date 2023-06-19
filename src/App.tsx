import { styled } from 'styled-components';
import Providers from './Providers';

function App() {
  return (
    <Providers>
      <Container>
        <Title>Happy Hacking with React & TypeScript 🚀</Title>
      </Container>
    </Providers>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary}
`;

export default App;
