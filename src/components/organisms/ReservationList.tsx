import React from 'react';

import ReservationItem, {
  ReservationItemProps,
} from '../molecules/Reservation';

type ReservationListProps = {
  data: ReservationItemProps[];
};

const ReservationList: React.FC<ReservationListProps> = ({ data }) => {
  return (
    <div>
      {data?.map((item) => (
        <ReservationItem key={item?.storeId} {...item} />
      ))}
    </div>
  );
};

export default ReservationList;
