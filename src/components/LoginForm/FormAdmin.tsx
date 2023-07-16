import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, ForgetPassword, Form, InputForm, TitleLogin } from './Login.styled';
import { loginSchema } from '../../utils';

import { authRoutes } from '../../services';

interface FormData {
  email: string;
  password: string;
}

interface ReqError extends AxiosResponse {
  response: {
    data: {
      error: boolean;
      data: {
        message: string;
      };
    };
  };
}

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(loginSchema), mode: 'onBlur' });

  const { isLoading, mutate, error } = useMutation((data: FormData) => authRoutes.login(data), {
    onSuccess: (data) => {
      localStorage.setItem('user', JSON.stringify(data.data.data.user));
      if (data.data.data.user.isAdmin) {
        navigate('/admin');
      } else {
        toast.error('This page just for Admin');
        navigate('/admin');
      }
    },
    onError: (err: ReqError) => {
      toast.error(err.response.data.data.message);
    },
  });

  const onSubmit = (data: FormData) => {
    mutate(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TitleLogin>Login Admin</TitleLogin>
      <InputForm
        id="email"
        label="Email"
        type="email"
        {...register('email')}
        error={!!errors.email?.message || !!error}
        helperText={errors.email?.message || error?.response.data.data.message}
      />
      <InputForm
        id="password"
        label="Password"
        type="password"
        {...register('password')}
        error={!!errors.password?.message || !!error}
        helperText={errors.password?.message || error?.response.data.data.message}
      />
      <Button loading={isLoading} loadingPosition="center" variant="contained" type="submit">
        Login
      </Button>

      <ForgetPassword to="/hello">Forget Password?</ForgetPassword>
    </Form>
  );
};

export default LoginForm;
