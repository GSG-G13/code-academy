import Member from './Member';

interface MembersContextProps {
  membersCount: string;
  setMembersCount: (count: string) => void;
  member: Member[];
  setMember: (members: Member[]) => void;
  currentPage: string;
  setCurrentPage: (count: string) => void;
  pages: string;
  setPages: (count: string) => void;
}

export default MembersContextProps;
