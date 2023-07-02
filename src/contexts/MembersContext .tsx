import { ReactNode, createContext, useState, useMemo } from 'react';
import { Member, MembersContextProps } from '../utils';

export const MembersContext = createContext<MembersContextProps>({
  membersCount: '0',
  member: [],
  currentPage: '1',
  pages: '0',
  setMembersCount: () => {
    throw new Error('setMembersCount is not implemented');
  },
  setMember: () => {
    throw new Error('setMember is not implemented');
  },
  setCurrentPage: () => {
    throw new Error('setCurrentPage is not implemented');
  },
  setPages: () => {
    throw new Error('setPages is not implemented');
  },
});

export const MembersProvider = ({ children }: { children: ReactNode }) => {
  const [membersCount, setMembersCount] = useState('0');
  const [member, setMember] = useState<Member[]>([]);
  const [currentPage, setCurrentPage] = useState<string>('1');
  const [pages, setPages] = useState<string>('0');

  const contextValue = useMemo(
    () => ({
      membersCount,
      setMembersCount,
      member,
      setMember,
      currentPage,
      setCurrentPage,
      pages,
      setPages,
    }),
    [
      membersCount,
      setMembersCount,
      member,
      setMember,
      currentPage,
      setCurrentPage,
      pages,
      setPages,
    ],
  );

  return <MembersContext.Provider value={contextValue}>{children}</MembersContext.Provider>;
};
