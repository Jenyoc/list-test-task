import { configureStore } from '@reduxjs/toolkit';
import { listReducer } from './list-reducer';

export const store = configureStore({
  reducer: listReducer,
});
