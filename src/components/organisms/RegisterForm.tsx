import React, { useState } from 'react';

import { useAppThunkDispatch } from '../../store';

import { registerUser, MemberStatus } from '../../store/_reducer/user';

import {
  FormControl,
  FormControlProps,
  FormLabel,
  Box,
} from '@chakra-ui/react';

import CustomInput from '../atoms/Input';

import CustomButton from '../atoms/Button';

import CustomSelect from '../atoms/Select';
import { useNavigate } from 'react-router-dom';

export type RegisterFormProps = Omit<FormControlProps, 'onSubmit'>;

const RegisterForm = (props: RegisterFormProps) => {
  const navigate = useNavigate();
  const dispatch = useAppThunkDispatch();

  const [username, setuserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [status, setStatus] = useState<string>('CLIENT');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const result = await dispatch(
      registerUser({ password, username, memberStatus: status as MemberStatus })
    ).unwrap();

    console.log(result);

    if (result?.username) {
      navigate('/signin');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl display={'flex'} flexDirection={'column'} gap={6} {...props}>
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
        >
          <FormLabel>유저명</FormLabel>
          <CustomInput
            placeholder="username"
            value={username}
            onChange={(e) => setuserName(e.target.value)}
          />
        </Box>
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
        >
          <FormLabel>비밀번호</FormLabel>
          <CustomInput
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <CustomSelect
          setValue={(value: string) => setStatus(value)}
          list={[
            { value: 'CLIENT', title: '일반 회원' },
            { value: 'PARTNER', title: '파트너 회원' },
          ]}
        />
        <CustomButton type="submit">회원가입</CustomButton>
      </FormControl>
    </form>
  );
};

export default RegisterForm;
