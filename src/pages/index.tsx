import React from 'react';

import useAuth from '../hooks/useAuth';

import MainTemplate from '../components/templeit/mainTemplate';

const Index = () => {
  useAuth(true);

  return (
    <MainTemplate
      ListStyle={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      ItemStyle={{ display: 'flex', gap: 6 }}
    />
  );
};

export default Index;
