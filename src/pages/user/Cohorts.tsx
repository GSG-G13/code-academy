import { styled } from 'styled-components';
import {
  CallToAction, CohortsWrapper, PageTitle, Pagination,
} from '../../components';

const CohortsContainer = styled.div`
  padding: calc(70px + 1rem) 1rem 1rem;
`;

const Cohorts = () => (
  <>
    <CohortsContainer>
      <PageTitle>Cohorts</PageTitle>
      <CohortsWrapper />
      <Pagination />
    </CohortsContainer>
    <CallToAction />
  </>
);

export default Cohorts;
