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
import {
  RiHome4Line,
  RiDashboardLine,
  RiUserLine,
  RiGlobalLine,
  RiGroupLine,
  RiLogoutCircleLine,
} from 'react-icons/ri';
import { LuAlignJustify } from 'react-icons/lu';
import { BiBookmarks } from 'react-icons/bi';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Drawer, AppBar, DrawerHeader } from './layout.styled';
import Search from '../Search';
import Image from '../Image';
import '../../assets/style/academy.css';

interface IProps {
  children: React.ReactNode;
}

const MiniDrawer = ({ children }: IProps) => {
  const [open, setOpen] = React.useState(true);
  const [activeItem, setActiveItem] = React.useState('');

  const handleSideBar = () => {
    setOpen((prev) => !prev);
  };

  const navigate = useNavigate();

  const Dot = styled.span`
    width: 5px;
    height: 5px;
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

  const hoverItemStyles = `
    .hover-item {
      cursor: pointer;
    }

    .hover-item:hover {
      background: linear-gradient(45deg, #0f0f18, transparent);
    }

    .hover-item:hover::after {
      content: ' ';
      display: block;
      position: absolute;
      left: 0; 
      bottom: 0; 
      height: 0%;
      width: 3px;
      background-color: #e4ddf8;
      animation : nothing 0.5s forwards;
    }
    @keyframes nothing {
      100%{ height: 100%; }

    }
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
          <Search />
          <Image />
        </Toolbar>
      </AppBar>
      <Drawer
        className="karam"
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
              height: '45px',
              objectFit: 'contain',
              marginRight: '1rem',
              marginBottom: '1rem',
            }}
          />
        </DrawerHeader>
        <List>
          {[
            { label: 'G13', to: '/academy', icon: RiHome4Line },
            { label: 'Community', to: '/academy/community', icon: RiGlobalLine },
          ].map((item) => (
            <ListItem key={item.label} disablePadding sx={{ display: 'flex' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  position: 'relative',
                  background:
                    activeItem === item.label
                      ? 'linear-gradient(45deg, #0f0f18, transparent)'
                      : 'transparent',
                  '&::after':
                    activeItem === item.label
                      ? {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        left: '0',
                        bottom: '0',
                        height: '0%',
                        width: '3px',
                        backgroundColor: '#e4ddf8',
                        animation: 'nothing 0.5s forwards',
                      }
                      : 'transparent',
                }}
                classes={{
                  root: 'hover-item',
                }}
                onClick={() => {
                  navigate(item.to);
                  setActiveItem(item.label);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                    color: '#007fff',
                  }}
                >
                  <item.icon style={{ fontSize: '1.3rem' }} />
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
            { label: 'My Profile', to: '/academy/my-profile', icon: RiUserLine },
            { label: 'Cohorts', to: '/academy/cohorts', icon: RiDashboardLine },
            { label: 'Members', to: '/academy/members', icon: RiGroupLine },
            { label: 'Saves', to: '/academy/saves', icon: BiBookmarks },
          ].map((item) => (
            <ListItem key={item.label} disablePadding sx={{ display: 'flex' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  position: 'relative',
                  background:
                    activeItem === item.label
                      ? 'linear-gradient(45deg, #0f0f18, transparent)'
                      : 'transparent',
                  '&::after':
                    activeItem === item.label
                      ? {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        left: '0',
                        bottom: '0',
                        height: '0%',
                        width: '3px',
                        backgroundColor: '#e4ddf8',
                        animation: 'nothing 0.5s forwards',
                      }
                      : 'transparent',
                }}
                classes={{
                  root: 'hover-item',
                }}
                onClick={() => {
                  navigate(item.to);
                  setActiveItem(item.label);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                    color: '#007fff',
                  }}
                >
                  <item.icon style={{ fontSize: '1.3rem' }} />
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
          {[{ label: 'logout', to: '/academy/logout', icon: RiLogoutCircleLine }].map((item) => (
            <ListItem key={item.label} disablePadding sx={{ display: 'flex' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                classes={{
                  root: 'hover-item',
                }}
                onClick={() => {
                  navigate(item.to);
                  setActiveItem(item.label);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                    color: '#007fff',
                  }}
                >
                  <item.icon style={{ fontSize: '1.3rem' }} />
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
      <OutletContainer>{children}</OutletContainer>
      <style>{hoverItemStyles}</style>
    </Box>
  );
};

export default MiniDrawer;

const OutletContainer = styled.div`
  width: 100%;
  padding-top: calc(70px);
`;
