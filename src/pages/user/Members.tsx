import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { styled } from 'styled-components';
import {
  PageTitle,
  CallToAction,
  CohortMembersTopBar,
  UsersCardsWrapper,
  Pagination,
} from '../../components';
import { membersRoutes } from '../../services';
import { Member, MemberData } from '../../utils';

const MembersContainer = styled.div`
  padding: calc(70px + 1rem) 1rem 1rem;
`;

const Members = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [membersCount, setMembersCount] = useState<string>('0');
  const [currentPage, setCurrentPage] = useState<string>('1');
  const [pages, setPages] = useState<string>('0');

  const { error } = useQuery<{ data: MemberData }>(
    ['members', currentPage],
    async () => {
      const response = await membersRoutes.getAllByPage(Number(currentPage));
      return response.data as { data: MemberData };
    },
    {
      onSuccess: (data) => {
        const { members: allMembers, pagination } = data.data;
        const { allMembersCount, currentPage: current, pages: myPages } = pagination;

        setMembersCount(allMembersCount);
        setCurrentPage(current);
        setPages(myPages);
        setMembers(allMembers);
      },
    },
  );

  useEffect(() => {
    if (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      toast.error(errorMessage);
    }
  }, [error]);

  return (
    <>
      <MembersContainer>
        <PageTitle>Members</PageTitle>
        <CohortMembersTopBar membersCount={membersCount} />
        <UsersCardsWrapper members={members} />
        <Pagination currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage} />
      </MembersContainer>
      <CallToAction />
    </>
  );
};

export default Members;
