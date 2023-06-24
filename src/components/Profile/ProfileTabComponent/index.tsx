import { TabsContainer, Tab2 } from './style';

interface Tab {
  title: string;
  path: string;
  count?: number;
}

const tabs: Tab[] = [
  { title: 'Activity', path: '/academy/my-profile/activity' },
  { title: 'ProfileInfo', path: '/academy/my-profile/ProfileInfo' },
  { title: 'Cohorts', path: '/academy/my-profile/Cohorts', count: 2 },
  { title: 'Likes', path: '/academy/my-profile/Likes', count: 5 },
];

const ProfileTabComponent = () => (
  <TabsContainer>
    {tabs.map(({ title, count, path }) => (
      <Tab2
        style={{
          textDecoration: 'none',
          color: '#48465b',
        }}
        href={path}
        key={title}
      >
        {title}
        {count && (
          <span
            style={{
              display: 'flex',
              background: '#4E64DD',
              backgroundSize: '1px',
              color: '#fff',
              borderRadius: '50%',
              fontSize: '12px',
              width: '20px',
              height: ' 20px',
              padding: '4px 4px 4px 4px',
              marginLeft: '10px',
              marginTop: '15px',
              content: 'center',
            }}
          >
            {count}
          </span>
        )}
      </Tab2>
    ))}
  </TabsContainer>
);

export default ProfileTabComponent;
