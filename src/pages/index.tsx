import React from 'react';

import useAuth from '../hooks/useAuth';

const Index = () => {
  useAuth();

  return <div>Hello world!</div>;
};

export default Index;
