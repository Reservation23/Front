import React from 'react';

import useAuth from '../hooks/useAuth';

import ReservationList from '../components/organisms/ReservationList';

const Index = () => {
  useAuth(true);

  return <ReservationList data={[]} />;
};

export default Index;
