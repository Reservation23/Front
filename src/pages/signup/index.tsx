import React from 'react';

import SignupTemplate from '../../components/templeit/signupTemplate';

import useAuth from '../../hooks/useAuth';

const SignUpIndex = () => {
  useAuth(false);

  return (
    <SignupTemplate
      templateStyle={{
        width: ['100%', '100%', '100%', 900],
        margin: '0 auto',
        display: 'flex',
        flexDir: 'column',
        gap: 6,
      }}
      registerForm={{
        whiteSpace: 'nowrap',
      }}
    />
  );
};

export default SignUpIndex;
