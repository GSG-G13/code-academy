import { styled } from 'styled-components';
import { MyCohortWrapper, PageTitle } from '../../components';

const MyCohortContainer = styled.div`
  padding: 1rem 1rem;
`;

const MyCohort = () => (
  <MyCohortContainer>
    <PageTitle>Activity</PageTitle>
    <MyCohortWrapper />
  </MyCohortContainer>
);

export default MyCohort;
