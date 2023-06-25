import {
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
} from './LoginStyle';

const Login = () => (
  <LoginPage>
    <ContainerLogin>
      <LeftSide />
      <RightSide>
        <CodeAcademy />
        <Form>
          <TitleLogin>Login</TitleLogin>
          <Label htmlFor="email">
            <InputForm id="email" required placeholder="" type="email" />
            <Span>Email</Span>
          </Label>
          <Label htmlFor="password">
            <InputForm required placeholder="" id="password" type="password" />
            <Span>Password</Span>
          </Label>
          <Button type="submit">Submit</Button>
          <ForgetPassword to="/hello">Forget Password</ForgetPassword>
        </Form>
      </RightSide>
    </ContainerLogin>
  </LoginPage>
);

export default Login;
