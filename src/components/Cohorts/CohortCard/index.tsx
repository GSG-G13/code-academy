import { Grid, Avatar } from '@mui/material';
import { RiArrowRightLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
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
  alt: string,
  imgSrc: string,
  cohortName: string,
  cohortMembers: number,
  startDate: string,
  endDate: string,
}

const CohortCard = ({
  alt, imgSrc, cohortName, cohortMembers, startDate, endDate,
}: IProps) => (
  <Grid item xs={15} sm={5} md={5} lg={3}>
    <CohortCardDiv>
      <CohortCardImgDiv>
        <Avatar
          alt={alt}
          src={imgSrc}
          sx={{ width: 90, height: 90, boxShadow: '0 0 0 5px #ffffff' }}
        />
      </CohortCardImgDiv>
      <CohortCardDetails>
        <CohortName>
          <Link to={cohortName}>{cohortName}</Link>
        </CohortName>
        <CohortMembers>
          {cohortMembers}
          {' '}
          Members
        </CohortMembers>
        <Date>
          <p>{startDate}</p>
          <RiArrowRightLine />
          <p>{endDate}</p>
        </Date>
        <VisitBtn>Visit</VisitBtn>
      </CohortCardDetails>
    </CohortCardDiv>
  </Grid>
);

export default CohortCard;