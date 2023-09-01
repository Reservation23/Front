import React from 'react';

export interface ReservationItemProps {
  storeId: number;
  memberId: number;
  name: string;
  location: string;
  description: string;
}

const ReservationItem: React.FC<ReservationItemProps> = ({
  description,
  location,
  memberId,
  name,
  storeId,
}) => {
  return <div></div>;
};

export default ReservationItem;
