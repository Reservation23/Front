import React from 'react';

import LoginForm, { LoginFormProps } from '../organisms/LoginForm';

import { Box, BoxProps, Heading } from '@chakra-ui/react';

interface SigninTemplateProps {
  templateStyle: BoxProps;
  loginForm: LoginFormProps;
}

const SigninTemplate: React.FC<SigninTemplateProps> = ({
  loginForm,
  templateStyle,
}) => {
  return (
    <Box {...templateStyle}>
      <Heading>로그인</Heading>
      <LoginForm {...loginForm} />
    </Box>
  );
};

export default SigninTemplate;
