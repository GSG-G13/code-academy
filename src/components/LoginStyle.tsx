import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const CodeAcademy = styled.div`
  background: url(/logo1.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 50px;
  left: 50px;
  width: 40%;
  position: absolute;
  aspect-ratio: 426/127;
`;
const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  &::after {
    content: ' ';
  }
`;
const ContainerLogin = styled.div`
  height: 80vh;
  width: 80vw;
  max-width: 1111px;
  background: white;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
`;
const LeftSide = styled.div`
  flex: 1;
  background: url(/login.jpg) center center;
  background-size: cover;
  filter: brightness(0.5);
  border-radius: 4px;
  @media (max-width: 767px) {
    display: none;
  }
`;
const RightSide = styled.div`
  flex: 1;
  position: relative;
  &::after {
    content: ' ';
    background: url(/screen.png);
    background-size: cover;
    height: min(20%, 150px);
    display: block;
    aspect-ratio: 1;
    position: absolute;
    right: 10px;
    transform: translateY(-100%);
  }
`;
const Form = styled.form`
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
const TitleLogin = styled.div`
  font-size: 28px;
  color: royalblue;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
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
const Label = styled.label`
  position: relative;
`;
const Span = styled.span`
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
`;
const InputForm = styled.input`
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
  &:placeholder-shown + Span {
    top: 15px;
    font-size: 0.9em;
  }
  &:focus + Span,
  &:valid + Span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }
  &:valid + Span {
    color: green;
  }
`;
const Button = styled.button`
  position: relative;
  border: none;
  outline: none;
  background-color: royalblue;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: 0.3s ease;
  &:hover {
    background-color: rgb(56, 90, 194);
  }
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
