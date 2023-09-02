import React from 'react';

import { BoxProps } from '@chakra-ui/react';

import ReservationList from '../organisms/ReservationList';
import Header from '../organisms/Header';

interface Props {
  ListStyle?: BoxProps;
}

const MainTemplate: React.FC<Props> = ({ ListStyle }) => {
  return (
    <>
      <Header />
      <ReservationList ListStyle={ListStyle} />;
    </>
  );
};

export default MainTemplate;
