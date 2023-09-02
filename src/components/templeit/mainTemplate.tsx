import React from 'react';

import { BoxProps } from '@chakra-ui/react';

import ReservationList from '../organisms/ReservationList';
import Header from '../organisms/Header';

interface Props {
  ListStyle?: BoxProps;
  ItemStyle?: BoxProps;
}

const MainTemplate: React.FC<Props> = ({ ListStyle, ItemStyle }) => {
  return (
    <>
      <Header />
      <ReservationList ListStyle={ListStyle} ItemStyle={ItemStyle} />;
    </>
  );
};

export default MainTemplate;
