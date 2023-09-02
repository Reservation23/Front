import React, { useState } from 'react';

import { useAppThunkDispatch } from '../../store';

import { loginUser } from '../../store/_reducer/user';

import { useNavigate } from 'react-router-dom';

import {
  FormControl,
  FormControlProps,
  FormLabel,
  Box,
} from '@chakra-ui/react';

import CustomInput from '../atoms/Input';

import ButtonList from '../molecules/ButtonList';

export type LoginData = {
  username: string;
  password: string;
};

export type LoginFormProps = Omit<FormControlProps, 'onSubmit'>;

const LoginForm = (props: LoginFormProps) => {
  const navigate = useNavigate();
  const dispatch = useAppThunkDispatch();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ username, password })).unwrap();

    if (!result?.username) {
      alert('로그인 정보를 다시 확인해주세요.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl display={'flex'} flexDirection={'column'} gap={6} {...props}>
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
