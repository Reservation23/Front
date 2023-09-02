import React from 'react';

import { Box } from '@chakra-ui/react';

import { useAppSelector, useAppDispatch } from '../../store/index';

import { logoutUser } from '../../store/_reducer/user';

import { initReservation } from '../../store/_reducer/reservation';

import CustomButton from '../atoms/Button';

const Header = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const onClickLogOut = () => {
    dispatch(logoutUser());
    dispatch(initReservation());
  };

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      height={'100px'}
      padding={'0 20px'}
      borderBottom={'1px solid black'}
    >
      <span>{user.username} 님 환영합니다.</span>
      <CustomButton type="button" onClick={onClickLogOut}>
        로그아웃
      </CustomButton>
    </Box>
  );
};

export default Header;
