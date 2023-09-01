import React from 'react';

import { LoginData } from '../../components/molecules/LoginForm';

import SigninTemplate from '../../components/templeit/signinTemplate';

import useAuth from '../../hooks/useAuth';

const SigninIndex = () => {
  useAuth(false);
  const onSubmit = async (value: LoginData) => {
    // api 연동
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
