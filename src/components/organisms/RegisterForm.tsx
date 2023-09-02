import React, { useState } from 'react';

import {
  FormControl,
  FormControlProps,
  FormLabel,
  Box,
} from '@chakra-ui/react';

import CustomInput from '../atoms/Input';

import CustomButton from '../atoms/Button';

import CustomSelect from '../atoms/Select';

type MemberStatus = 'CLIENT' | 'PARTNER';

export type RegisterData = {
  password: string;
  username: string;
  memberStatus: MemberStatus;
};

export type RegisterFormProps = Omit<FormControlProps, 'onSubmit'> & {
  onSubmit: (value: RegisterData) => void;
};

const RegisterForm = (props: RegisterFormProps) => {
  const { onSubmit, ...rest } = props;

  const [username, setuserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [status, setStatus] = useState<string>('CLIENT');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit({
      password,
      username,
      memberStatus: status as MemberStatus,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl display={'flex'} flexDirection={'column'} gap={6} {...rest}>
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
