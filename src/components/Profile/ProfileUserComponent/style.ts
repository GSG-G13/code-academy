import { styled } from 'styled-components';

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-image: url('../../src/assets/black-paper.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5rem 2.014rem 1.875rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
  }
`;

const ProfileUserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12rem;
  border-radius: 0.5rem;
`;

const ProfileUserImage = styled.img`
  width: 100%;
  height: 10.625rem;
  object-fit: cover;
  border-radius: 0.25rem 0.25rem 0rem 0rem;
`;

const ProfileUserIcons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 0.5rem 0rem;
  background-color: white;
  border-radius: 0rem 0rem 0.3rem 0.3rem;
`;

const ProfileUserIconEmail = styled.a`
  width: 20px;
  height: 20px;
  a {
    color: rgb(72, 70, 91);
  }

  a:hover {
    color: green;
  }
`;
const ProfileUserIconGithub = styled.a`
  width: 20px;
  height: 20px;
  a {
    color: rgb(72, 70, 91);
  }

  a:hover {
    color: red;
  }
`;
const ProfileUserIconLinkedin = styled.a`
  width: 20px;
  height: 20px;
  a {
    color: rgb(72, 70, 91);
  }

  a:hover {
    color: black;
  }
`;
const ProfileUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0rem 1.875rem 0.8rem;
  justify-content: flex-end;
  row-gap: 1rem;

  & > h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ProfileUserCohort = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.75rem;

  & > span {
    color: white;
    font-weight: 700;
    font-size: 0.95rem;
  }
`;
export {
  ProfileContainer,
  ProfileUserDetails,
  ProfileUserImage,
  ProfileUserIcons,
  ProfileUserIconEmail,
  ProfileUserIconGithub,
  ProfileUserIconLinkedin,
  ProfileUserInfo,
  ProfileUserCohort,
};
