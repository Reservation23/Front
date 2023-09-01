import React from 'react';

import RegisterForm from '../molecules/RegisterForm';

import { RegisterFormProps } from '../molecules/RegisterForm';

import { Box, BoxProps, Heading } from '@chakra-ui/react';

interface SignupTemplateProps {
  templateStyle: BoxProps;
  registerForm: RegisterFormProps;
}

const SignupTemplate: React.FC<SignupTemplateProps> = ({
  registerForm,
  templateStyle,
}) => {
  return (
    <Box {...templateStyle}>
      <Heading>회원가입</Heading>
      <RegisterForm {...registerForm} />
    </Box>
  );
};

export default SignupTemplate;
