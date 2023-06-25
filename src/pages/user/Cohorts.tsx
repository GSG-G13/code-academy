import { styled } from 'styled-components';
import { CallToAction, CohortsWrapper, Pagination } from '../../components';

const CohortsContainer = styled.div`
  padding: calc(70px + 1rem) 1rem 1rem;
`;

const Cohorts = () => (
  <>
    <CohortsContainer>
      <CohortsWrapper />
      <Pagination />
    </CohortsContainer>
    <CallToAction />
  </>
);

export default Cohorts;
