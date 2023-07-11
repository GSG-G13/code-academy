import { CodeAcademy, ContainerLogin, LeftSide, LoginPage, RightSide } from '../../components';
import { FormAdmin } from '../../components/LoginForm';

const LoginAdmin = () => (
  <LoginPage>
    <ContainerLogin>
      <LeftSide />
      <RightSide>
        <CodeAcademy />
        <FormAdmin />
      </RightSide>
    </ContainerLogin>
  </LoginPage>
);

export default LoginAdmin;
