import React from 'react';

import { LoginData } from '../../components/organisms/LoginForm';

import { useAppThunkDispatch } from '../../store';

import { loginUser } from '../../store/_reducer/user';

import useAuth from '../../hooks/useAuth';

import SigninTemplate from '../../components/templeit/signinTemplate';

const SigninIndex = () => {
  useAuth(false);
  const dispatch = useAppThunkDispatch();

  const onSubmit = async (value: LoginData) => {
    if (!value.password || !value.username) return;

    dispatch(loginUser(value));
  };

  return (
    <SigninTemplate
      templateStyle={{
        width: ['100%', '100%', '100%', 900],
        margin: '0 auto',
        display: 'flex',
        flexDir: 'column',
        gap: 6,
      }}
      loginForm={{
        onSubmit,
        whiteSpace: 'nowrap',
      }}
    />
  );
};

export default SigninIndex;
