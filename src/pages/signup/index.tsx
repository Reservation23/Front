import React from 'react';

import { RegisterData } from '../../components/molecules/RegisterForm';

import SignupTemplate from '../../components/templeit/signupTemplate';

import useAuth from '../../hooks/useAuth';

const SignUpIndex = () => {
  useAuth(false);
  const onSubmit = async (value: RegisterData) => {
    try {
      const response = await fetch('http://3.39.231.227:8080/member', {
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
    <SignupTemplate
      templateStyle={{
        width: ['100%', '100%', '100%', 900],
        margin: '0 auto',
        display: 'flex',
        flexDir: 'column',
        gap: 6,
      }}
      registerForm={{
        onSubmit,
        whiteSpace: 'nowrap',
      }}
    />
  );
};

export default SignUpIndex;
