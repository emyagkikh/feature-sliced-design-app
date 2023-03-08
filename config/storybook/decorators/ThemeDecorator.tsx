import { type ThemeEnum, ThemeProvider } from 'app/providers/ThemeProvider';
import { type Story } from '@storybook/react';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: ThemeEnum) => (StoryComponent: Story) => (
  <div className={`app ${theme}`}>
    <ThemeProvider>
      <StoryComponent />
    </ThemeProvider>
  </div>
);
