import React, { ReactNode, createContext, useState } from 'react';
import { Cohort, CohortsContextProps } from '../utils';

export const CohortsContext = createContext<CohortsContextProps>({
  CohortsCount: '0',
  cohort: [],
  currentPage: '1',
  pages: '0',
  setCohortsCount: () => {
    throw new Error('Error setCohortsCount');
  },
  setCohort: () => {
    throw new Error(' Error setCohort');
  },
  setCurrentPage: () => {
    throw new Error('Error setCurrentPage');
  },
  setPages: () => {
    throw new Error('Error setPages');
  },
  setMembersCount(): void {
    throw new Error('Error setMembersCount');
  },
});

export const CohortsProvider = ({ children }: { children: ReactNode }) => {
  const [cohortsCount, setCohortsCount] = useState('0');
  const [cohort, setCohort] = useState<Cohort[]>([]);
  const [currentPage, setCurrentPage] = useState<string>('1');
  const [pages, setPages] = useState<string>('0');

  const contextValue = React.useMemo(
    () => ({
      cohortsCount,
      setCohortsCount,
      cohort,
      setCohort,
      currentPage,
      setCurrentPage,
      pages,
      setPages,
    }),
    [
      cohortsCount,
      setCohortsCount,
      cohort,
      setCohort,
      currentPage,
      setCurrentPage,
      pages,
      setPages,
    ],
  );
  return <CohortsContext.Provider value={contextValue}>{children}</CohortsContext.Provider>;
};
