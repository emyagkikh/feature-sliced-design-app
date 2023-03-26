import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from './../getCounter/getCounter';
import { type counterSchema } from 'entities/Counter';

export const getCounterValue = createSelector(
  getCounter,
  (counter: counterSchema) => counter.value,
);
