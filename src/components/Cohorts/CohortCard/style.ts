import { styled, Button } from '@mui/material';

const CohortCardDiv = styled('div')`
  background-color: #fff;
  border-radius: 0.3rem;
  border: 1px solid transparent;
  box-shadow: 0 0 15px 0 rgba(82, 63, 105, 0.05);
  transition: 0.3s;
  border-bottom: 3px solid transparent;
  &:hover {
    transform: translateY(-5px);
    border-bottom-color: #0abb87;
  }
`;

const CohortCardImgDiv = styled('div')`
  width: 100%;
  height: 150px;
  background: url('../../../public/cohort-background.jpg') center center;
  background-size: cover;
  border-top-right-radius: 0.3rem;
  border-top-left-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CohortCardDetails = styled('div')`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CohortName = styled('h2')`
  font-size: 1.3rem;
  a {
    color: #48465b;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
      color: #2c56c6;
    }
  }
  margin-bottom: 10px;
`;

const CohortMembers = styled('p')`
  color: #77888f;
  font-size: 0.9rem;
  font-weight: 500;
`;

const VisitBtn = styled(Button)`
  background-color: rgba(0, 0, 20, 0.05);
  color: #6c7293;
  margin-top: 20px;
  width: 100%;
  padding: 4px;
  &:hover {
    background-color: #2c56c6d6;
    color: #fff;
  }
`;

const Date = styled('div')`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  font-size: 14px;
`;

export {
  CohortCardDiv,
  CohortCardImgDiv,
  CohortCardDetails,
  CohortName,
  CohortMembers,
  VisitBtn,
  Date,
};
