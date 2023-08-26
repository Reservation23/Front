import React from 'react';

import {
  FormControl,
  FormControlProps,
  FormLabel,
  Box,
} from '@chakra-ui/react';

import CustomInput from '../atoms/Input';

type LoginFormProps = FormControlProps;

const LoginForm = (props: LoginFormProps) => {
  return (
    <FormControl display={'flex'} flexDirection={'column'} gap={6} {...props}>
      <Box display={'flex'} flexDirection={'row'} gap={6}>
        <FormLabel>이메일</FormLabel>
        <CustomInput />
      </Box>
      <Box display={'flex'} flexDirection={'row'} gap={6}>
        <FormLabel>비밀번호</FormLabel>
        <CustomInput />
      </Box>
    </FormControl>
  );
};

export default LoginForm;
