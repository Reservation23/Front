import React from 'react';
import GlobalLayout from './_layout';
import Index from './index';
import SignUpIndex from './signup';

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Index />, index: true },
      {
        path: 'signup',
        element: <SignUpIndex />,
        index: true,
      },
    ],
  },
];

export const pages = [{ route: '/' }, { route: '/signup' }];
