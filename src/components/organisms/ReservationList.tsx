import React, { useEffect } from 'react';

import { useAppSelector, useAppThunkDispatch } from '../../store';

import { getReservation } from '../../store/_reducer/reservation';

import { Table, TableProps } from '@chakra-ui/react';

import ReservationItem from '../molecules/Reservation';
import { useNavigate } from 'react-router-dom';

interface Props {
  ListStyle?: TableProps;
}

const ReservationList = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppThunkDispatch();

  const data = useAppSelector((state) => state.reservation);

  const onClick = (id: number) => {
    navigate(`/reservation/${id}`);
  };

  useEffect(() => {
    dispatch(getReservation());
  }, []);

  return (
    <Table display={'flex'} flexDirection={'column'} {...props.ListStyle}>
      {data?.data.map((item, index) => (
        <ReservationItem
          key={item?.storeId}
          index={index + 1}
          onClick={onClick}
          {...item}
        />
      ))}
    </Table>
  );
};

export default ReservationList;
