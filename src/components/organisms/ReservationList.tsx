import React, { useEffect } from 'react';

import { useAppSelector, useAppThunkDispatch } from '../../store';

import {
  ReservationItemProps,
  getReservation,
} from '../../store/_reducer/reservation';

import ReservationItem from '../molecules/Reservation';

type ReservationListProps = {
  data: ReservationItemProps[];
};

const ReservationList: React.FC<ReservationListProps> = () => {
  const dispatch = useAppThunkDispatch();

  const data = useAppSelector((state) => state.reservation);

  useEffect(() => {
    dispatch(getReservation());
  }, []);

  console.log(data);

  return (
    <div>
      {data?.data.map((item) => (
        <ReservationItem key={item?.storeId} {...item} />
      ))}
    </div>
  );
};

export default ReservationList;
