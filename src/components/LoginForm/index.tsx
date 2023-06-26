import {
  Button, ForgetPassword, Form, InputForm, TitleLogin,
} from './Login.styled';

const LoginForm = () => (
  <Form>
    <TitleLogin>Login</TitleLogin>
    <InputForm id="email" label="Email" type="email" />
    <InputForm id="password" label="password" type="password" />
    <Button loading={false} loadingPosition="center" variant="contained">
      Login
    </Button>
    <ForgetPassword to="/hello">Forget Password?</ForgetPassword>
  </Form>
);

export default LoginForm;
