import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('Button render', () => {
    render(<Button>Test button</Button>);
    expect(screen.getByText('Test button')).toBeInTheDocument();
  });

  test('Button clear class', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test button</Button>);
    expect(screen.getByText('Test button')).toHaveClass('clear');
    screen.debug();
  });
});
