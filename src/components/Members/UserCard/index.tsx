import { Avatar, Grid } from '@mui/material';
import React from 'react';
import {
  UserCardWrapper, UserNameLink, UserJobTitle, Div,
} from './style';

interface ICardProps {
    alt: string,
    img: string,
    name: string,
    cohort: string,
    jobTitle: string,
    children: React.ReactElement
}

const UserCard = ({
  alt, img, name, cohort, jobTitle, children,
}: ICardProps) => (
  <Grid item xs={15} sm={5} md={5} lg={3}>
    <UserCardWrapper>
      <Div>
        <Avatar
          alt={alt}
          src={img}
          sx={{ width: 90, height: 90 }}
        />
        <UserNameLink>
          <a href="###">{name}</a>
        </UserNameLink>
        <UserJobTitle>
          <span>{cohort}</span>
          <p>{jobTitle}</p>
        </UserJobTitle>
      </Div>
      {children}
    </UserCardWrapper>
  </Grid>
);

export default UserCard;
