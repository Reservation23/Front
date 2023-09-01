import React from 'react';

import { useAppDispatch } from '../store';

import { logoutUser } from '../store/_reducer/user';

import { initReservation } from '../store/_reducer/reservation';

import useAuth from '../hooks/useAuth';

import CustomButton from '../components/atoms/Button';

import MainTemplate from '../components/templeit/mainTemplate';

const Index = () => {
  useAuth(true);

  const dispatch = useAppDispatch();

  const onClickLogOut = () => {
    dispatch(logoutUser());
    dispatch(initReservation());
  };

  return (
    <>
      <CustomButton type="button" onClick={onClickLogOut}>
        로그아웃
      </CustomButton>
      <MainTemplate
        ListStyle={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        ItemStyle={{ display: 'flex', gap: 6 }}
      />
    </>
  );
};

export default Index;
