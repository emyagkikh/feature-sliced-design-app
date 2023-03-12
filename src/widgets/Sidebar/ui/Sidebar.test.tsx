import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation/renderWithTranslation';
import cls from './Sidebar.module.scss';

describe('Sidebar', () => {
  test('Sidebar is in the document', () => {
    renderWithTranslation(<Sidebar/>);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle sidebar', () => {
    renderWithTranslation(<Sidebar/>);
    const sidebarEl = screen.getByTestId('sidebar');
    const toggleButton = screen.getByTestId('sidebar-btn-toggle');
    expect(sidebarEl).toBeInTheDocument();
    expect(toggleButton).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(sidebarEl).toHaveClass(cls.Sidebar_minified);
  });
});
