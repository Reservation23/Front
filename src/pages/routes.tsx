import React from 'react';
import GlobalLayout from './_layout';
import Index from './index';
import SignUpIndex from './signup';
import SigninIndex from './signin';

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
      {
        path: 'signin',
        element: <SigninIndex />,
        index: true,
      },
    ],
  },
];

export const pages = [
  { route: '/' },
  { route: '/signup' },
  { route: '/signin' },
];
