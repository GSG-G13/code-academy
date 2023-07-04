/* eslint-disable no-shadow */
import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { JSX } from '@emotion/react/jsx-dev-runtime';
import {
  CallToAction,
  CohortTopBar,
  CohortsWrapper,
  PageTitle,
  PaginationCohort,
} from '../../components';
import { cohortsRoutes } from '../../services';
import { ReqError, Cohort, CohortData } from '../../utils';

const CohortsContainer = styled.div`
  padding: 1rem 1rem;
`;

const Cohorts = (): JSX.Element => {
  const [cohorts, setCohorts] = useState<Cohort[]>([]);
  const [cohortsCount, setCohortsCount] = useState<string>('0');
  const [currentPage, setCurrentPage] = useState<string>('1');
  const [pages, setPages] = useState<string>('0');

  const { data, error } = useQuery<{ data: CohortData }>(
    ['cohorts', currentPage],
    async () => {
      const response = await cohortsRoutes.getAllByPage(Number(currentPage));
      return response.data as { data: CohortData };
    },
    {
      onSuccess: (data) => {
        const { cohorts: allCohorts, pagination } = data.data;
        const { allCohortsCount, currentPage, pages } = pagination;
        setCohortsCount(allCohortsCount);
        setCurrentPage(currentPage);
        setPages(pages);

        setCohorts(allCohorts);
      },
    },
  );

  useEffect(() => {
    if (error) {
      toast.error(error.response.data.data.message);
    }
  }, [error]);

  return (
    <>
      <CohortsContainer>
        <PageTitle>Cohorts</PageTitle>
        <CohortTopBar cohortsCount={cohortsCount} />
        <CohortsWrapper cohorts={cohorts} />
        <PaginationCohort currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage} />
      </CohortsContainer>
      <CallToAction />
    </>
  );
};
export default Cohorts;
