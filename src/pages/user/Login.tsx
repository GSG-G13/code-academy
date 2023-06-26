import {
  CodeAcademy,
  ContainerLogin,
  LeftSide,
  LoginForm,
  LoginPage,
  RightSide,
} from '../../components';

const Login = () => (
  <LoginPage>
    <ContainerLogin>
      <LeftSide />
      <RightSide>
        <CodeAcademy />
        <LoginForm />
      </RightSide>
    </ContainerLogin>
  </LoginPage>
);

export default Login;
