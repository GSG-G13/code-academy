import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
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
import { CohortsProvider } from '../../contexts/CohortsContext ';
import LoadingBtn from '../../components/Cohorts/CohortsTopBar/LoadingButton';

const CohortsContainer = styled.div`
  padding: 1rem 1rem;
`;

const Cohorts = (): JSX.Element => {
  const [cohorts, setCohorts] = useState<Cohort[]>([]);
  const [cohortsCount, setCohortsCount] = useState<string>('0');
  const [currentPage, setCurrentPage] = useState<string>('1');
  const [pages, setPages] = useState<string>('0');

  const { mutate } = useMutation(
    async (page: number) => {
      const response = await cohortsRoutes.getAllByPage(page);
      console.log(response.data);
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
      onError: (err: ReqError) => {
        toast.error(err.response.data.data.message);
      },
    },
  );

  useEffect(() => mutate(Number(currentPage)), [currentPage]);
  return (
    <>
      <CohortsProvider>
        <CohortsContainer>
          <PageTitle>Cohorts</PageTitle>
          <CohortTopBar cohortsCount={cohortsCount} />
          <CohortsWrapper cohorts={cohorts} />
          <PaginationCohort
            currentPage={currentPage}
            pages={pages}
            setCurrentPage={setCurrentPage}
          />
        </CohortsContainer>
      </CohortsProvider>
      <CallToAction />
    </>
  );
};
export default Cohorts;
