import { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';
import {
  CohortContainer,
  CohortCard,
  CohortBackground,
  CohortImage,
  CohortInfo,
  MemberCount,
  JoinDate,
  LeaveButton,
} from './style';

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

const CohortCardComponent = () => {
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
                  {cohort.isPrivate ? 'Private Group' : 'Public Group'}
             
                  {cohort.memberCount}
           
                  members
                </MemberCount>
              </CohortInfo>
              <CohortInfo>
                <JoinDate variant="body2">
                  Joined:
             
                  {format(cohort.joinDate, 'dd/MM/yyyy')}
                </JoinDate>
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
