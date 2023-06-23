import { RiLinkedinLine, RiGithubLine, RiGoogleLine } from 'react-icons/ri';
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
  specialty: speciality,
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
            <style>
              {`
    a:hover {
      color: green;
    }
  `}
            </style>
            <RiGoogleLine />
          </a>
        </ProfileUserIconEmail>
      </ProfileUserIcons>
    </ProfileUserDetails>
    <ProfileUserInfo>
      <h2>{name}</h2>
      <ProfileUserCohort>
        <span>{cohort}</span>
        <span>.</span>
        <span>{speciality}</span>
      </ProfileUserCohort>
    </ProfileUserInfo>
  </ProfileContainer>
);

export default ProfileUserComponent;