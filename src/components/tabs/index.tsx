import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { SyntheticEvent, useState } from 'react';

const Tabs = () => {
  const [value, setValue] = useState<string>('1');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Activity" value="1" />
            <Tab label="Profile" value="2" />
            <Tab label="Cohorts" value="3" />
            <Tab label="Likes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">Activity</TabPanel>
        <TabPanel value="2">Profile</TabPanel>
        <TabPanel value="3">Cohorts</TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </Box>
  );
};

export default Tabs;
