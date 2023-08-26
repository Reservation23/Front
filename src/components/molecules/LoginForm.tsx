import React from 'react';

import {
  FormControl,
  FormControlProps,
  FormLabel,
  Box,
} from '@chakra-ui/react';

import CustomInput from '../atoms/Input';
import ButtonList from './ButtonList';

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
      <ButtonList
        buttonList={[
          { children: '로그인', type: 'submit' },
          { children: '회원가입', onClick: () => {}, type: 'button' },
        ]}
      />
    </FormControl>
  );
};

export default LoginForm;
