import { styled } from 'styled-components';
import Providers from './Providers';
import Members from './pages';

const App = () => (
  <Providers>
    <Container>
      <Members />
    </Container>
  </Providers>
);

const Container = styled.div`
  min-height: 100vh;
  padding: 3%;
  background-color: #f0f3f4;
`;

export default App;
