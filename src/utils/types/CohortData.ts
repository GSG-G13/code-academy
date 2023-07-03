import Cohorts from './Cohorts';
import PaginationData from './CohortPagination';

interface CohortData {
  cohorts: Cohorts[];
  pagination: PaginationData;
}

export default CohortData;
