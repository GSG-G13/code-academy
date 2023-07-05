import Cohorts from './Cohorts';
import PaginationData from './CohortPagination';

interface CohortData {
  cohorts: Cohorts[];
  pagination: PaginationData;
  allCohortsCount: number;
  myPagination: PaginationData;
}

export default CohortData;
