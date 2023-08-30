import React, { useState } from 'react';

import {
  FormControl,
  FormControlProps,
  FormLabel,
  Box,
} from '@chakra-ui/react';

import CustomInput from '../atoms/Input';

import CustomButton from '../atoms/Button';

export type RegisterData = {
  password: string;
  username: string;
  memberStatus: 'CLIENT' | 'PARTNER';
};

export type RegisterFormProps = Omit<FormControlProps, 'onSubmit'> & {
  onSubmit: (value: RegisterData) => void;
};

const RegisterForm = (props: RegisterFormProps) => {
  const { onSubmit, ...rest } = props;

  const [username, setuserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit({ password, username, memberStatus: 'CLIENT' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl display={'flex'} flexDirection={'column'} gap={6} {...rest}>
        <Box display={'flex'} flexDirection={'row'} gap={6}>
          <FormLabel>유저명</FormLabel>
          <CustomInput
            placeholder="username"
            value={username}
            onChange={(e) => setuserName(e.target.value)}
          />
        </Box>
        <Box display={'flex'} flexDirection={'row'} gap={6}>
          <FormLabel>비밀번호</FormLabel>
          <CustomInput
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <CustomButton type="submit">회원가입</CustomButton>
      </FormControl>
    </form>
  );
};

export default RegisterForm;
