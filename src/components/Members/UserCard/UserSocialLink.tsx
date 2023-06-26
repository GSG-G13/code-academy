import React from 'react';
import { styled } from 'styled-components';
import { UserSocialLink } from './style';

interface IProps {
  socialLink: string,
  children: React.ReactElement,
  iconColor: string,
  hoverColor: string;
}

interface ISocialLink {
  iconColor: string;
  hoverColor: string;
}

const UserSocialLinkBox = ({
  socialLink, children, iconColor, hoverColor,
}:IProps) => (
  <SocialLink href={socialLink} iconColor={iconColor} hoverColor={hoverColor} target="_blank">{children}</SocialLink>
);

const SocialLink = styled(UserSocialLink)<ISocialLink>`
  color: ${({ iconColor }) => iconColor};
  transition: color 1s;
  font-size: 1.2rem;

  path { 
    &:last-child {
      stroke-width: .3px;
      stroke-linejoin: round;
    }
  }

  &:hover {
    path { 
    &:last-child {
      stroke-width: .4px;
    }
  }
    color: ${({ hoverColor }) => hoverColor}
  }
`;

export default UserSocialLinkBox;
