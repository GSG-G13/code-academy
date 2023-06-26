import { RiLinkedinLine, RiGithubLine, RiGoogleLine } from 'react-icons/ri';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
  ProfileContainer,
  ProfileUserDetails,
  ProfileUserImage,
  ProfileUserIcons,
  ProfileUserIconEmail,
  ProfileUserIconGithub,
  ProfileUserIconLinkedin,
  ProfileUserInfo,
  ProfileUserCohort,
} from './style';

interface IProfileUserProps {
  name: string;
  cohort: number;
  specialty: string;
  imageUrl: string;
  email: string;
  github: string;
  linkedin: string;
}

const ProfileUserComponent = ({
  name,
  cohort,
  specialty,
  imageUrl,
  email,
  github,
  linkedin,
}: IProfileUserProps) => (
  <ProfileContainer>
    <ProfileUserDetails>
      <ProfileUserImage src={imageUrl} />
      <ProfileUserIcons>
        <ProfileUserIconGithub>
          <a href={github}>
            <RiGithubLine />
          </a>
        </ProfileUserIconGithub>

        <ProfileUserIconLinkedin>
          <a href={linkedin}>
            <RiLinkedinLine />
          </a>
        </ProfileUserIconLinkedin>
        <ProfileUserIconEmail>
          <a href={`mailto:${email}`}>
            <RiGoogleLine />
          </a>
        </ProfileUserIconEmail>
      </ProfileUserIcons>
    </ProfileUserDetails>
    <ProfileUserInfo>
      <h2>{name}</h2>
      <ProfileUserCohort>
        <span>{cohort}</span>
        <FiberManualRecordIcon style={{ color: 'white', width: '10px' }} />
        <span>{specialty}</span>
      </ProfileUserCohort>
    </ProfileUserInfo>
  </ProfileContainer>
);

export default ProfileUserComponent;
