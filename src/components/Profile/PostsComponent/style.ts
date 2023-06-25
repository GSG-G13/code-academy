import styled from 'styled-components';
import { Card, Typography } from '@mui/material';

const StyledCard = styled(Card)`
  width: 75%;
  margin: 20px;
  font-size: 13.6px;
`;

const ProfileImageWrapper = styled.div`
  background-color: black;
  margin-bottom: 20px;
`;

const ProfileImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const ProfileComment = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`;

const CommentContent = styled.div`
  margin-left: 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
`;

const StyledTypography = styled(Typography)`
  font-size: 13.6px;
  margin-right: 5px;
  border-radius: 50%;
`;
export {
  StyledCard,
  ProfileImageWrapper,
  ProfileImage,
  ProfileComment,
  CommentContent,
  TitleWrapper,
  StyledTypography,
};
