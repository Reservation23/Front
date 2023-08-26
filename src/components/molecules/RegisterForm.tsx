import React from 'react';

import {
  FormControl,
  FormControlProps,
  FormLabel,
  Box,
} from '@chakra-ui/react';

import CustomInput from '../atoms/Input';

import CustomButton from '../atoms/Button';

type RegisterFormProps = FormControlProps;

const RegisterForm = (props: RegisterFormProps) => {
  return (
    <FormControl display={'flex'} flexDirection={'column'} gap={6} {...props}>
      <Box display={'flex'} flexDirection={'row'} gap={6}>
        <FormLabel>이메일</FormLabel>
        <CustomInput />
      </Box>
      <Box display={'flex'} flexDirection={'row'} gap={6}>
        <FormLabel>비밀번호</FormLabel>
        <CustomInput type="password" />
      </Box>
      <CustomButton>회원가입</CustomButton>
    </FormControl>
  );
};

export default RegisterForm;
