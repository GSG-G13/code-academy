import { styled } from 'styled-components';
import {
  PageTitle,
  CallToAction,
  CohortMembersTopBar,
  UsersCardsWrapper,
  Pagination,
} from '../../components';

const MembersContainer = styled.div`
  padding: 1rem 1rem;
`;

const Members = () => (
  <>
    <MembersContainer>
      <PageTitle>Members</PageTitle>
      <CohortMembersTopBar />
      <UsersCardsWrapper />
      <Pagination />
    </MembersContainer>
    <CallToAction />
  </>
);

export default Members;
