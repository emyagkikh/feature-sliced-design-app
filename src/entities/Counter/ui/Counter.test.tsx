import { screen } from '@testing-library/react';
import { Counter } from './Counter';
import { componentRender } from 'shared/lib/test/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';

describe('Counter', () => {
  test('render', () => {
    componentRender(<Counter/>, {
      'initialState': {
        'counter': {
          'value': 10,
        },
      },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment btn click event', () => {
    componentRender(<Counter/>, {
      'initialState': {
        'counter': {
          'value': 10,
        },
      },
    });

    userEvent.click(screen.getByTestId('btn-increment'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement btn click event', () => {
    componentRender(<Counter/>, {
      'initialState': {
        'counter': {
          'value': 10,
        },
      },
    });

    userEvent.click(screen.getByTestId('btn-decrement'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
