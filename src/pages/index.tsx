import React from 'react';

import useAuth from '../hooks/useAuth';

import MainTemplate from '../components/templeit/mainTemplate';

const Index = () => {
  useAuth(true);

  return <MainTemplate />;
};

export default Index;
