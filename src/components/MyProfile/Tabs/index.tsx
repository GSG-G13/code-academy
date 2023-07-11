import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { styled } from '@mui/material';
import ProfileDetailsWrapper from './ProfileDetailsWrapper';

const LabTabs = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box>
          <TabListStyle onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Activity" value="1" />
            <Tab label="Profile" value="2" />
            <Tab label="Cohorts" value="3" />
            <Tab label="Likes" value="4" />
          </TabListStyle>
        </Box>
        <ProfileDetailsWrapper />
      </TabContext>
    </Box>
  );
};

const TabListStyle = styled(TabList)`
  background-color: #fff;
  button {
    padding: 25px;
  }
`;

export default LabTabs;
