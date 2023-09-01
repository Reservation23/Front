import React from 'react';

import { ReservationItemProps } from '../../store/_reducer/reservation';

import { Box, BoxProps } from '@chakra-ui/react';

const ReservationItem: React.FC<
  ReservationItemProps & { style?: BoxProps }
> = ({ description, location, memberId, name, storeId, style }) => {
  return (
    <Box {...style}>
      <div>{name}</div>
      <div>{location}</div>
      <div>{description}</div>
    </Box>
  );
};

export default ReservationItem;
