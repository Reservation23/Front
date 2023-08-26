import * as React from 'react';

import { useRoutes } from 'react-router-dom';

import { routes } from './pages/routes';

import { ChakraProvider, theme } from '@chakra-ui/react';

export const App = () => {
  const elem = useRoutes(routes);
  return <ChakraProvider theme={theme}>{elem}</ChakraProvider>;
};
