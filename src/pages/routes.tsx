import React from 'react';
import GlobalLayout from './_layout';
import Index from './index';
import PartnerStore from './partner-store/index';

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [{ path: '/', element: <Index />, index: true }, { path: '/partner', element: <PartnerStore />, index: true }],
  },
];

export const pages = [{ route: '/' }];
