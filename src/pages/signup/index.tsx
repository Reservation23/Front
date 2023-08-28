import React from 'react';

import SigninTemplate from '../../components/_templates/signinTemplate';

import { RegisterData } from '../../components/molecules/RegisterForm';

const SignUpIndex = () => {
  const onSubmit = async (value: RegisterData) => {
    try {
      const response = await fetch('/member', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SigninTemplate
      templateStyle={{
        width: ['100%', '100%', '100%', 1200],
        margin: '0 auto',
        display: 'flex',
        flexDir: 'column',
        gap: 6,
      }}
      registerForm={{
        onSubmit,
      }}
    />
  );
};

export default SignUpIndex;
