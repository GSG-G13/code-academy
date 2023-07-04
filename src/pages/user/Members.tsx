import { styled } from 'styled-components';
import {
  PageTitle,
  CallToAction,
  CohortMembersTopBar,
  UsersCardsWrapper,
  Pagination,
} from '../../components';

const MembersContainer = styled.div`
<<<<<<< HEAD
    padding: 1rem 1rem;
=======
  padding: 1rem 1rem;
>>>>>>> a8e14760a4f25b8c79113e911020cadf8fcb00b9
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
