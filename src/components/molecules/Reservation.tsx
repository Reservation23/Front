import React from 'react';

import { ReservationItemProps } from '../../store/_reducer/reservation';

import { BoxProps, Tr, Td } from '@chakra-ui/react';

import CustomButton from '../atoms/Button';

const ReservationItem: React.FC<
  ReservationItemProps & {
    style?: BoxProps;
    index: number;
    onClick: (id: number) => void;
  }
> = ({
  description,
  location,
  memberId,
  name,
  storeId,
  style,
  index,
  onClick,
}) => {
  return (
    <Tr display={'grid'} gridTemplateColumns={'1fr 1fr 1fr 3fr 1fr'} {...style}>
      <Td>{index}</Td>
      <Td>{name}</Td>
      <Td>{location}</Td>
      <Td>{description}</Td>
      <Td>
        <CustomButton onClick={() => onClick(storeId)}>예약</CustomButton>
      </Td>
    </Tr>
  );
};

export default ReservationItem;
