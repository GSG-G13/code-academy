import Cohorts from './Cohorts';
import PaginationData from './CohortPagination';

interface myCohortData {
  MyCohorts: Cohorts[];
  MyPagination: PaginationData;
  MyallCohortsCount: number;
}

export default myCohortData;
