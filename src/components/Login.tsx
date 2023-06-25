import {
  CodeAcademy,
  LoginPage,
  ContainerLogin,
  LeftSide,
  RightSide,
  Form,
  TitleLogin,
  ForgetPassword,
  InputForm,
  Button,
} from './LoginStyle';

const Login = () => (
  <LoginPage>
    <ContainerLogin>
      <LeftSide />
      <RightSide>
        <CodeAcademy />
        <Form>
          <TitleLogin>Login</TitleLogin>
          <InputForm id="email" label="Email" type="email" />
          <InputForm id="password" label="password" type="password" />
          <Button loading={false} loadingPosition="center" variant="contained">
            Login
          </Button>
          <ForgetPassword to="/hello">Forget Password?</ForgetPassword>
        </Form>
      </RightSide>
    </ContainerLogin>
  </LoginPage>
);

export default Login;
