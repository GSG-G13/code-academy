import { Grid, Avatar } from '@mui/material';
import { RiArrowRightLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import {
  CohortCardDiv,
  CohortCardImgDiv,
  CohortCardDetails,
  CohortName,
  CohortMembers,
  VisitBtn,
  Date,
} from './style';

interface IProps {
  alt: string;
  imgSrc: string;
  cohortName: string;
  cohortMembers: number;
  startDate: string;
  endDate: string;
}

const CohortCard = ({ alt, imgSrc, cohortName, cohortMembers, startDate, endDate }: IProps) => {
  const cohortNav = useNavigate();
  return (
    <Grid item xs={15} sm={5} md={5} lg={3}>
      <CohortCardDiv onClick={() => cohortNav('/academy/cohorts/G13')}>
        <CohortCardImgDiv>
          <Avatar
            alt={alt}
            src={imgSrc}
            sx={{
              width: 90,
              height: 90,
              boxShadow: '0 0 0 5px #ffffff',
              zIndex: 1,
            }}
          />
        </CohortCardImgDiv>
        <CohortCardDetails>
          <CohortName>{cohortName} </CohortName>
          <CohortMembers>{cohortMembers} Members</CohortMembers>
          <Date>
            <p>{startDate}</p>
            <RiArrowRightLine />
            <p>{endDate}</p>
          </Date>
          <VisitBtn onClick={() => cohortNav('/academy/cohorts/G13')}>Visit</VisitBtn>
        </CohortCardDetails>
      </CohortCardDiv>
    </Grid>
  );
};

export default CohortCard;
