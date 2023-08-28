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
  email: string;
  password: string;
  username: string;
};

export type RegisterFormProps = Omit<FormControlProps, 'onSubmit'> & {
  onSubmit: (value: RegisterData) => void;
};

const RegisterForm = (props: RegisterFormProps) => {
  const { onSubmit, ...rest } = props;

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit({ email, password, username: name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl display={'flex'} flexDirection={'column'} gap={6} {...rest}>
        <Box display={'flex'} flexDirection={'row'} gap={6}>
          <FormLabel>이름</FormLabel>
          <CustomInput
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <Box display={'flex'} flexDirection={'row'} gap={6}>
          <FormLabel>이메일</FormLabel>
          <CustomInput
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
