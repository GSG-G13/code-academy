import * as React from 'react';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid } from '@mui/material';
import { styled } from 'styled-components';
import BarTitle from './BarTitle';
import UsersCard from './UsersCard';

interface IMembersBar{
  barTitle: string,
  children: React.ReactNode
}

const MembersBar = ({ barTitle, children }: IMembersBar) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={4} sm={4} md={4} lg={4}>
      <MembersBarDiv>
        <BarTitle barTitle={barTitle} />
        <TabContext value={value}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {children}
            </TabList>
          </Box>
          <MembersCardsWrapper>
            <TabPanel value="1" sx={{ padding: '10px' }}>
              <UsersCard alt="Hi" src="ffff" userName="Khaled" />
            </TabPanel>
            <TabPanel value="2" sx={{ padding: '10px' }}>
              Item Two
            </TabPanel>
            <TabPanel value="3" sx={{ padding: '10px' }}>
              Item Three
            </TabPanel>
          </MembersCardsWrapper>
        </TabContext>
      </MembersBarDiv>
    </Grid>
  );
};

const MembersBarDiv = styled.div`
  background-color: white;
`;

const MembersCardsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  height: 400px;
  overflow-y: auto;
  padding: 2px;
`;

export default MembersBar;
