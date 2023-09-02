import React from 'react';

import useAuth from '../../hooks/useAuth';

import SigninTemplate from '../../components/templeit/signinTemplate';

const SigninIndex = () => {
  useAuth(false);

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
        whiteSpace: 'nowrap',
      }}
    />
  );
};

export default SigninIndex;
