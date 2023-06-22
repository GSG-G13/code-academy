// import { Link } from 'react-router-dom';
import { TabsContainer, Tab2 } from './style';

interface Tab {
  title: string;
  path: string;
}

const tabs: Tab[] = [
  { title: 'Activity', path: '/activity' },
  { title: 'Profile', path: '/Profile' },
  { title: 'Cohorts', path: '/Cohorts' },
  { title: 'Likes', path: '/Likes' },
];

const ProfileTabComponent = () => (
  <TabsContainer>
    {tabs.map(({ title }) => (
      <Tab2
        style={{
          textDecoration: 'none',
          color: '#48465b',
        }}
        href="/"
        key={title}
      >
        {title}
      </Tab2>
    ))}
  </TabsContainer>
);
export default ProfileTabComponent;
