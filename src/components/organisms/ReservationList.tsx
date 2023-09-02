import React, { useEffect } from 'react';

import { useAppSelector, useAppThunkDispatch } from '../../store';

import { getReservation } from '../../store/_reducer/reservation';

import { Table, TableProps } from '@chakra-ui/react';

import ReservationItem from '../molecules/Reservation';

interface Props {
  ListStyle?: TableProps;
}

const ReservationList = (props: Props) => {
  const dispatch = useAppThunkDispatch();

  const data = useAppSelector((state) => state.reservation);

  useEffect(() => {
    dispatch(getReservation());
  }, []);

  return (
    <Table display={'flex'} flexDirection={'column'} {...props.ListStyle}>
      {data?.data.map((item) => (
        <ReservationItem key={item?.storeId} {...item} />
      ))}
    </Table>
  );
};

export default ReservationList;
