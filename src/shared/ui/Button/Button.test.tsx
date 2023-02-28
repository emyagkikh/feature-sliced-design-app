import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('button', () => {
  test('button is in the document', () => {
    render(<Button>Test button</Button>);
    expect(screen.getByText('Test button')).toBeInTheDocument();
  });
});
