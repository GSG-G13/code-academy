import { CodeAcademy, ContainerLogin, LeftSide, LoginPage, RightSide } from '../../components';
import { FormUser } from '../../components/LoginForm';

const LoginUser = () => (
  <LoginPage>
    <ContainerLogin>
      <LeftSide />
      <RightSide>
        <CodeAcademy />
        <FormUser />
      </RightSide>
    </ContainerLogin>
  </LoginPage>
);

export default LoginUser;
