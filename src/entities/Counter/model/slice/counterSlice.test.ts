import { counterActions, counterReducer } from './counterSlice';
import { type counterSchema } from 'entities/Counter';

describe('counterSlice', () => {
  test('decrement', () => {
    const state: counterSchema = {
      'value': 10,
    };

    expect(counterReducer(
      state,
      counterActions.decrement(),
    )).toEqual({ 'value': 9 });
  });

  test('empty state decrement', () => {
    expect(counterReducer(
      undefined,
      counterActions.increment(),
    )).toEqual({ 'value': -1 });
  });

  test('increment', () => {
    const state: counterSchema = {
      'value': 10,
    };

    expect(counterReducer(
      state,
      counterActions.increment(),
    )).toEqual({ 'value': 11 });
  });

  test('empty state increment', () => {
    expect(counterReducer(
      undefined,
      counterActions.increment(),
    )).toEqual({ 'value': 1 });
  });
});
