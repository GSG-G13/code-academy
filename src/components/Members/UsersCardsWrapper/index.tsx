import { RiLinkedinLine, RiGithubLine, RiGoogleLine } from 'react-icons/ri';
import { Grid } from '@mui/material';
import UserCard from '../UserCard';
import UserSocialLinkBox from '../UserCard/UserSocialLink';
import { UserSocialLinks } from '../UserCard/style';
import { Member, SocialLink } from '../../../utils';

const UsersCardsWrapper = ({ members }: { members: Member[] }) => {
  const links: SocialLink[] = [
    {
      name: 'Github',
      iconColor: '#6c7293',
      hoverColor: '#333',
      icon: <RiGithubLine />,
    },
    {
      name: 'Linkedin',
      iconColor: '#6c7293',
      hoverColor: '#0073AF',
      icon: <RiLinkedinLine />,
    },
    {
      name: 'Github',
      iconColor: '#6c7293',
      hoverColor: '#C71610',
      icon: <RiGoogleLine />,
    },
  ];
  return (
    <Grid
      container
      spacing={2}
      columns={{
        xs: 15,
        sm: 15,
        md: 15,
        lg: 15,
      }}
    >
      {members.map((member) => (
        <UserCard
          key={member.userId}
          alt={member.fullName}
          img={member.avatar}
          name={member.fullName}
          cohort={
            // eslint-disable-next-line no-nested-ternary
            member.cohorts[0]
              ? `[${member.cohorts}]`.toLocaleUpperCase().length < 11
                ? `[${member.cohorts}]`.toLocaleUpperCase()
                : `${`[${member.cohorts}]`.slice(0, 8)}]...`.toLocaleUpperCase()
              : ''
          }
          jobTitle={member.careerStatus}
        >
          <UserSocialLinks>
            {links.map(({ name, iconColor, hoverColor, icon }) => (
              <UserSocialLinkBox socialLink={name} iconColor={iconColor} hoverColor={hoverColor}>
                {icon}
              </UserSocialLinkBox>
            ))}
          </UserSocialLinks>
        </UserCard>
      ))}
    </Grid>
  );
};

export default UsersCardsWrapper;
