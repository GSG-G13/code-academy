import { Link } from 'react-router-dom';
import { TextField, styled } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const CodeAcademy = styled('div')`
  background: url(/logo1.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 15%;
  left: 50%;
  transform: translateX(-55%);
  width: 200px;
  position: absolute;
  aspect-ratio: 426/127;
`;
const LoginPage = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  &::after {
    content: ' ';
  }
`;
const ContainerLogin = styled('div')`
  height: 80vh;
  width: 80vw;
  max-width: 1200px;
  background: white;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
`;
const LeftSide = styled('div')`
  flex: 1;
  background: url(https://www.convergences.org/wp-content/uploads/2021/07/Copy-of-Copy-of-EVE_2780-scaled.jpg)
    center center;
  background-size: cover;
  filter: brightness(0.5);
  border-radius: 4px;
  @media (max-width: 767px) {
    display: none;
  }
`;
const RightSide = styled('div')`
  flex: 1;
  position: relative;
`;
const Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  background-color: #fff;
  padding: 20px;
  width: 100%;
  border-radius: 20px;
  flex-wrap: nowrap;
  margin: auto;
  height: 100%;
  justify-content: center;
`;
const TitleLogin = styled('div')`
  font-size: 28px;
  color: royalblue;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  margin-bottom: 1rem;
  position: relative;
  &::after,
  &::before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: royalblue;
  }
  &::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
  }
  &::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }
  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

const ForgetPassword = styled(Link)`
  color: royalblue;
  font-size: 14px;
  text-align: center;
  &:hover {
    text-decoration: underline royalblue;
  }
`;
const Label = styled('label')`
  position: relative;
`;
const Span = styled('span')`
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
`;
const Button = styled(LoadingButton)`
  padding: 0.7rem 1rem;
  font-size: 1rem;
  background-color: #4e64dd;

  &:hover {
    background-color: #2c56c6;
  }
`;

const InputForm = styled(TextField)`
  margin-bottom: 0.5rem;
`;

export {
  CodeAcademy,
  LoginPage,
  ContainerLogin,
  LeftSide,
  RightSide,
  Form,
  TitleLogin,
  ForgetPassword,
  Label,
  Span,
  InputForm,
  Button,
};
