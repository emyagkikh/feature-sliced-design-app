import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
  test('Button render', () => {
    render(<Button>Test button</Button>);
    expect(screen.getByText('Test button')).toBeInTheDocument();
  });

  test('Button clear class', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test button</Button>);
    expect(screen.getByText('Test button')).toHaveClass('clear');
    screen.debug();
  });
});
