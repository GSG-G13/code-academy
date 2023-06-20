import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';

interface IProps {
  name: string;
  imageSrc: string;
  role: string;
}

const Profile = ({ name, imageSrc, role }: IProps) => (
  <Card
    style={{
      width: '100%',
      display: 'flex',
      height: '100%',
      gap: '20px',
      backgroundColor: 'grey',
    }}
  >
    <div
      style={{
        boxShadow: '0 0 25px 0 rgba(0,0,0,.15)',
        borderRadius: '10%',
        width: '20%',
        height: '80px',
        backgroundColor: 'white',
      }}
    >
      <CardMedia
        component="img"
        alt={`Profile picture of ${name}`}
        height="200px"
        image={imageSrc}
      />
      <CardContent
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          <IconButton style={{ color: 'black' }}>
            <GitHubIcon />
          </IconButton>
          <IconButton style={{ color: 'black' }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton style={{ color: 'black' }}>
            <MailOutlineIcon />
          </IconButton>
        </div>
      </CardContent>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-end',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h5">{name}</Typography>
      <Typography variant="body1">{role}</Typography>
    </div>
  </Card>
);
export default Profile;
