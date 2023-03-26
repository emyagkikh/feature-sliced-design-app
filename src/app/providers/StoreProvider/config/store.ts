import { configureStore } from '@reduxjs/toolkit';
import { type StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';

export function createReduxStore (initialState?: StateSchema) {
  return configureStore<StateSchema>({
    'reducer': {
      'counter': counterReducer,
    },
    'devTools': __DEV__,
    'preloadedState': initialState,
  });
}
