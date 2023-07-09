import { Avatar } from '@mui/material';
import { styled } from 'styled-components';

interface IUserCard{
  alt: string,
  src: string,
  userName: string
}

const UsersCard = ({ alt, src, userName }: IUserCard) => (
  <UsersCardWrapper>
    <Avatar alt={alt} src={src} sx={{ width: 50, height: 50 }} />
    <p>{userName}</p>
  </UsersCardWrapper>
);

const UsersCardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default UsersCard;
