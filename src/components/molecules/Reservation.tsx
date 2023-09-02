import React from 'react';

import { ReservationItemProps } from '../../store/_reducer/reservation';

import { BoxProps, Tr, Td } from '@chakra-ui/react';

import CustomButton from '../atoms/Button';

const ReservationItem: React.FC<
  ReservationItemProps & { style?: BoxProps }
> = ({ description, location, memberId, name, storeId, style }) => {
  return (
    <Tr
      display={'grid'}
      gridTemplateColumns={'1fr 1fr 1fr 3fr 1fr'}
      alignItems={'center'}
      {...style}
    >
      <Td>1</Td>
      <Td>{name}</Td>
      <Td>{location}</Td>
      <Td>{description}</Td>
      <Td>
        <CustomButton>예약</CustomButton>
      </Td>
    </Tr>
  );
};

export default ReservationItem;
