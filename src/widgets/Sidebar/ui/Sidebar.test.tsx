import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { componentRender } from 'shared/lib/test/componentRender/componentRender';
import cls from './Sidebar.module.scss';

describe('Sidebar', () => {
  test('Sidebar is in the document', () => {
    componentRender(<Sidebar/>);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle sidebar', () => {
    componentRender(<Sidebar/>);
    const sidebarEl = screen.getByTestId('sidebar');
    const toggleButton = screen.getByTestId('sidebar-btn-toggle');
    expect(sidebarEl).toBeInTheDocument();
    expect(toggleButton).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(sidebarEl).toHaveClass(cls.Sidebar_minified);
  });
});
