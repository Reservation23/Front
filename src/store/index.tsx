import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const reducers = combineReducers({});

const store = configureStore({
  reducer: reducers,
  middleware: [thunk, logger],
  devTools: process.env.NODE_ENV! !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
