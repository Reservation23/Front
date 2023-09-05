import React from 'react';
import GlobalLayout from './_layout';
import Index from './index';
import SignUpIndex from './signup';
import SigninIndex from './signin';
import ReservationDetailIndex from './reservation/[id]';

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
      {
        path: 'reservation/:id',
        element: <ReservationDetailIndex />,
        index: true,
      },
    ],
  },
];

export const pages = [
  { route: '/' },
  { route: '/signup' },
  { route: '/signin' },
  { route: 'reservation/:id' },
];
