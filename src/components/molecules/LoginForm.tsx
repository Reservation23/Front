import React, { useState } from 'react';

import {
  FormControl,
  FormControlProps,
  FormLabel,
  Box,
} from '@chakra-ui/react';

import CustomInput from '../atoms/Input';
import ButtonList from './ButtonList';
import { useNavigate } from 'react-router-dom';

export type LoginData = {
  username: string;
  password: string;
};

export type LoginFormProps = Omit<FormControlProps, 'onSubmit'> & {
  onSubmit: (value: LoginData) => void;
};

const LoginForm = (props: LoginFormProps) => {
  const { onSubmit, ...rest } = props;

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl display={'flex'} flexDirection={'column'} gap={6} {...rest}>
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <FormLabel>이메일</FormLabel>
          <CustomInput
            placeholder="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
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
            {
              children: '회원가입',
              onClick: () => navigate('/signup'),
              type: 'button',
            },
          ]}
        />
      </FormControl>
    </form>
  );
};

export default LoginForm;
