import React from 'react';
import GlobalLayout from './_layout';
import Index from './index';

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [{ path: '/', element: <Index />, index: true }],
  },
];

export const pages = [{ route: '/' }];
