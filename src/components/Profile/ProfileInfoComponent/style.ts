import { styled } from 'styled-components';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import Card from '@mui/material/Card';

const CohortCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  margin-bottom: 16px;
  width: 30%;
  height: 20%;
  width: calc(33.33% - 16px);
`;
const CohortContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CohortBackground = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 200px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const CohortImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 5px solid white;
`;

const CohortInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
`;

const CohortName = styled(Typography)`
  font-weight: bold;
  margin-right: 8px;
`;

const GroupInfo = styled(Typography)`
  font-size: 12px;
`;

const MemberCount = styled(Typography)`
  font-size: 12px;
  margin-right: 8px;
`;

const JoinDate = styled(Typography)`
  font-size: 12px;
`;

const LeaveButton = styled(IconButton)`
  margin-left: auto;
`;

const UpdateButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export {
  CohortCard,
  CohortContainer,
  CohortBackground,
  CohortImage,
  CohortInfo,
  CohortName,
  GroupInfo,
  MemberCount,
  JoinDate,
  LeaveButton,
  UpdateButton,
};
