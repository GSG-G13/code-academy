/* eslint-disable no-shadow */
import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import {
  CallToAction,
  CohortTopBar,
  CohortsWrapper,
  PageTitle,
  PaginationCohort,
} from '../../components';
import { cohortsRoutes } from '../../services';
import { Cohort, CohortData, ReqError } from '../../utils';

interface APIResponse<T> {
  data: T;
}

const CohortsContainer = styled.div`
  padding: 1rem 1rem;
`;

const Cohorts = () => {
  const [allCohorts, setAllCohorts] = useState<Cohort[]>([]);
  const [allCohortsCount, setAllCohortsCount] = useState<string>('0');
  const [allCurrentPage, setAllCurrentPage] = useState<string>('1');
  const [allPages, setAllPages] = useState<string>('0');
  const [cohortsToPass, setCohortsToPass] = useState<'myCohorts' | 'allCohorts'>('allCohorts');
  const [myCohorts, setMyCohorts] = useState<Cohort[]>([]);
  const [myCohortsCount, setMyCohortsCount] = useState<string>('0');
  const [myCurrentPage, setMyCurrentPage] = useState<string>('1');
  const [myPages, setMyPages] = useState<string>('0');

  const { isLoading: allLoadingQuery, error: allError } = useQuery<APIResponse<CohortData>>(
    ['allCohorts', allCurrentPage],
    async () => {
      const response = await cohortsRoutes.getAllByPage1(Number(allCurrentPage));
      return response.data as APIResponse<CohortData>;
    },
    {
      onSuccess: (data) => {
        const { cohorts: allCohorts, pagination } = data.data;
        const { allCohortsCount, currentPage, pages } = pagination;
        setAllCohorts(allCohorts);
        setAllCohortsCount(allCohortsCount);
        setAllCurrentPage(currentPage);
        setAllPages(pages);
      },
    },
  );

  const refetchAllCohortsCount = () => {
    setCohortsToPass('allCohorts');
  };

  const { isLoading: myLoading, error: myError } = useQuery<APIResponse<CohortData>>(
    ['myCohorts', myCurrentPage],
    async () => {
      const response = await cohortsRoutes.getAllByPage2(Number(myCurrentPage));
      return response.data as APIResponse<CohortData>;
    },
    {
      onSuccess: (data) => {
        const { cohorts: myCohorts, pagination } = data.data;
        const { allCohortsCount, currentPage, pages } = pagination;
        setMyCohorts(myCohorts);
        setMyCohortsCount(allCohortsCount);
        setMyCurrentPage(currentPage);
        setMyPages(pages);
      },
    },
  );

  const refetchMyCohortsCount = () => {
    setCohortsToPass('myCohorts');
  };

  useEffect(() => {
    if (allError) {
      toast.error((allError as ReqError).response?.data?.data?.message);
    }
  }, [allError]);

  useEffect(() => {
    if (myError) {
      toast.error((myError as ReqError).response?.data.data.message);
    }
  }, [myError]);

  return (
    <>
      <CohortsContainer>
        <PageTitle>Cohorts</PageTitle>
        <CohortTopBar
          cohortsCount={allCohortsCount}
          myCohortsCount={myCohortsCount}
          refetchMyCohortsCount={refetchMyCohortsCount}
          refetchAllCohortsCount={refetchAllCohortsCount}
          allLoadingQuery={allLoadingQuery}
          myLoading={myLoading}
        />
        <>
          <CohortsWrapper cohorts={cohortsToPass === 'allCohorts' ? allCohorts : myCohorts} />
          <PaginationCohort
            currentPage={cohortsToPass === 'allCohorts' ? allCurrentPage : myCurrentPage}
            pages={cohortsToPass === 'allCohorts' ? allPages : myPages}
            setCurrentPage={cohortsToPass === 'allCohorts' ? setAllCurrentPage : setMyCurrentPage}
          />
        </>
      </CohortsContainer>
      <CallToAction />
    </>
  );
};

export default Cohorts;
