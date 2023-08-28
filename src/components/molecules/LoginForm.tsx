import React, { useState } from 'react';

import {
  FormControl,
  FormControlProps,
  FormLabel,
  Box,
} from '@chakra-ui/react';

import CustomInput from '../atoms/Input';
import ButtonList from './ButtonList';

type LoginFormProps = Omit<FormControlProps, 'onSubmit'> & {
  onSubmit: (value: LoginData) => void;
};

type LoginData = {
  email: string;
  password: string;
};

const LoginForm = (props: LoginFormProps) => {
  const { onSubmit, ...rest } = props;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = () => {
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl display={'flex'} flexDirection={'column'} gap={6} {...rest}>
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
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <ButtonList
          buttonList={[
            { children: '로그인', type: 'submit' },
            { children: '회원가입', onClick: () => {}, type: 'button' },
          ]}
        />
      </FormControl>
    </form>
  );
};

export default LoginForm;
