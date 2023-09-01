import React, { useEffect } from 'react';

import { useAppSelector, useAppThunkDispatch } from '../../store';

import { getReservation } from '../../store/_reducer/reservation';

import { Box, BoxProps } from '@chakra-ui/react';

import ReservationItem from '../molecules/Reservation';

interface Props {
  ListStyle?: BoxProps;
  ItemStyle?: BoxProps;
}

const ReservationList = (props: Props) => {
  const dispatch = useAppThunkDispatch();

  const data = useAppSelector((state) => state.reservation);

  useEffect(() => {
    dispatch(getReservation());
  }, []);

  console.log(data);

  return (
    <Box {...props.ListStyle}>
      {data?.data.map((item) => (
        <ReservationItem
          key={item?.storeId}
          style={props.ItemStyle}
          {...item}
        />
      ))}
    </Box>
  );
};

export default ReservationList;
