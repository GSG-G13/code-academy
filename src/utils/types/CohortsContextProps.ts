import Cohort from './Cohorts';

interface CohortsContextProps {
  CohortsCount: string;
  setMembersCount: (count: string) => void;
  setCohortsCount: (count: string) => void;
  cohort: Cohort[];
  setCohort: (cohorts: Cohort[]) => void;
  currentPage: string;
  setCurrentPage: (count: string) => void;
  pages: string;
  setPages: (count: string) => void;
}

export default CohortsContextProps;
