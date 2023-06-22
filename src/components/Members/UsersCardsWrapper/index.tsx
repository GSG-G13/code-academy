import { RiLinkedinLine, RiGithubLine, RiGoogleLine } from 'react-icons/ri';
import { Grid } from '@mui/material';
import { ReactElement } from 'react';
import UserCard from '../UserCard';
import UserSocialLinkBox from '../UserCard/UserSocialLink';
import { UserSocialLinks } from '../UserCard/style';

interface SocialLink {
  name: string;
  iconColor: string;
  hoverColor: string;
  icon: ReactElement;
}

const UsersCardsWrapper = () => {
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
    <Grid spacing={2}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <UserCard
          alt="Khaled Al Nabaheen"
          img="https://a.foxdcg.com/dpp-uploaded/images/credits/502556198884/alert_missing_persons_unit_ryan_broussard_square_2x.jpg?fit=inside%7C*:278"
          name="Khaled Al Nabaheen"
          cohort="G13"
          jobTitle="FullStack-Developer"
        >
          <UserSocialLinks>
            {links.map(({
              name, iconColor, hoverColor, icon,
            }) => (
              <UserSocialLinkBox socialLink={name} iconColor={iconColor} hoverColor={hoverColor}>
                {icon}
              </UserSocialLinkBox>
            ))}
          </UserSocialLinks>
        </UserCard>
      </Grid>
    </Grid>
  );
};

export default UsersCardsWrapper;
