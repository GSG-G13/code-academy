import * as React from 'react';
import {
  Box,
  Toolbar,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ImMakeGroup } from 'react-icons/im';
import { CiGrid42, CiBank } from 'react-icons/ci';
import { LuLogOut, LuAlignJustify } from 'react-icons/lu';
import { BiBookmarks, BiUser } from 'react-icons/bi';
import { VscSettings, VscSymbolClass } from 'react-icons/vsc';
import { styled } from 'styled-components';
import { Drawer, AppBar, DrawerHeader } from './layout.styled';
import CustomizedInputBase from '../Search';
import BadgeAvatars from '../Image';
import '../../assets/style/academy.css';

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleSideBar = () => {
    setOpen((prev) => !prev);
  };

  const Dot = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    font-size: 0.8rem;
    background: #676773;
    margin: 1.2rem auto;
    display: block;
  `;

  const Title = styled.span`
    font-size: 0.8rem;
    color: #dbdbde;
    margin: 1.2rem 0.8rem;
    display: block;
  `;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        open={open}
        sx={{
          background: '#fff',
          color: '#6c7293',
          padding: '.2rem',
          paddingLeft: open ? '0' : '62px',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleSideBar}
            edge="start"
            style={{ color: '#07689F' }}
          >
            <LuAlignJustify />
          </IconButton>
          <CustomizedInputBase />
          <BadgeAvatars />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          zIndex: 1202,
        }}
      >
        {open ? null : (
          <img
            src="/favicon.png"
            alt="logo"
            style={{
              height: '55px',
              maxWidth: '100%',
              objectFit: 'contain',
              marginBottom: '1rem',
              marginTop: '.8rem',
              padding: '.3rem',
              marginRight: '.4rem',
            }}
          />
        )}
        <DrawerHeader
          sx={{
            justifyContent: 'space-around',
            padding: '1rem 8px 0 8px',
            zIndex: 2,
            ...(!open && { display: 'none' }),
          }}
        >
          <img
            src="/logo.png"
            alt="logo"
            style={{
              height: '50px',
              objectFit: 'contain',
              marginRight: '1rem',
              marginBottom: '1rem',
            }}
          />
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { label: 'G13', icon: CiBank },
            { label: 'Community', icon: CiGrid42 },
          ].map((item) => (
            <ListItem key={item.label} disablePadding sx={{ display: 'flex' }}>
              <ListItemButton
                sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#007fff',
                  }}
                >
                  <item.icon style={{ fontSize: '1.5rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    opacity: open ? 1 : 0,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          {open ? <Title>COMMUNITY</Title> : <Dot />}
          {[
            { label: 'Profile', icon: BiUser },
            { label: 'Cohorts', icon: VscSymbolClass },
            { label: 'Members', icon: ImMakeGroup },
            { label: 'Saves', icon: BiBookmarks },
          ].map((item) => (
            <ListItem key={item.label} disablePadding sx={{ display: 'flex' }}>
              <ListItemButton
                sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#007fff',
                  }}
                >
                  <item.icon style={{ fontSize: '1.5rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    opacity: open ? 1 : 0,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          {open ? <Title>OTHERS</Title> : <Dot />}
          {[
            { label: 'logout', icon: LuLogOut },
            { label: 'Setting', icon: VscSettings },
          ].map((item) => (
            <ListItem key={item.label} disablePadding sx={{ display: 'flex' }}>
              <ListItemButton
                sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#007fff',
                  }}
                >
                  <item.icon style={{ fontSize: '1.5rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    opacity: open ? 1 : 0,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, padding: '3px' }} />
    </Box>
  );
}
