import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';

// Styles for the components
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

// Sample cohort data
const cohortData = [
  {
    id: 1,
    background:
      'https://intranet.cera-theme.com/wp-content/themes/cera/assets/images/avatars/user-group.png',
    image:
      'https://intranet.cera-theme.com/wp-content/themes/cera/assets/images/avatars/user-group.png',
    name: 'G13',
    isPrivate: false,
    memberCount: 5,
    joinDate: new Date(),
  },
  {
    id: 2,
    background:
      'https://intranet.cera-theme.com/wp-content/themes/cera/assets/images/avatars/user-group.png',
    image:
      'https://intranet.cera-theme.com/wp-content/themes/cera/assets/images/avatars/user-group.png',
    name: 'G13',
    isPrivate: false,
    memberCount: 5,
    joinDate: new Date(),
  },
  {
    id: 3,
    background:
      'https://intranet.cera-theme.com/wp-content/themes/cera/assets/images/avatars/user-group.png',
    image:
      'https://intranet.cera-theme.com/wp-content/themes/cera/assets/images/avatars/user-group.png',
    name: 'G13',
    isPrivate: false,
    memberCount: 5,
    joinDate: new Date(),
  },
];

const CohortCardComponent: React.FC = () => {
  const [deletedCards, setDeletedCards] = useState<number[]>([]);

  const handleLeaveGroup = (id: number) => {
    setDeletedCards([...deletedCards, id]);
  };

  const isCardDeleted = (id: number) => deletedCards.includes(id);

  return (
    <CohortContainer>
      {cohortData.map((cohort) => {
        if (isCardDeleted(cohort.id)) {
          return null;
        }

        return (
          <CohortCard key={cohort.id}>
            <CohortBackground imageUrl={cohort.background}>
              <CohortImage src={cohort.image} alt="Cohort Image" />
            </CohortBackground>
            <CardContent>
              <CohortInfo>
                <Typography variant="subtitle1">{cohort.name}</Typography>
              </CohortInfo>
              <CohortInfo>
                <MemberCount variant="body2">
                  {cohort.isPrivate ? 'Private Group' : 'Public Group'} • {cohort.memberCount}{' '}
                  members
                </MemberCount>
              </CohortInfo>
              <CohortInfo>
                <JoinDate variant="body2">Joined: {format(cohort.joinDate, 'dd/MM/yyyy')}</JoinDate>
                <LeaveButton onClick={() => handleLeaveGroup(cohort.id)}>
                  <DeleteIcon />
                </LeaveButton>
              </CohortInfo>
            </CardContent>
          </CohortCard>
        );
      })}
    </CohortContainer>
  );
};

export default CohortCardComponent;
