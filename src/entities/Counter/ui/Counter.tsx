import { type FunctionComponent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Counter.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from './../model/slice/counterSlice';
import { getCounterValue } from './../model/selectors/getCounterValue/getCounterValue';

interface ICounterProps {
  className?: string
}

export const Counter: FunctionComponent<ICounterProps> = ({ className }) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className={classNames(cls.Counter, {}, [className])}>
      <h1 data-testid={'value-title'}>{counterValue}</h1>
      <Button onClick={increment} data-testid={'btn-increment'}>inc</Button>
      <Button onClick={decrement} data-testid={'btn-decrement'}>dec</Button>
    </div>
  );
};
