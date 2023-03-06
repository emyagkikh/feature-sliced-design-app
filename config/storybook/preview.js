import { addDecorator } from '@storybook/react';
import { StyleDecorator } from './decorators/StyleDecorator';
import { ThemeDecorator } from './decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { RouterDecorator } from './decorators/RouterDecorator';

export const parameters = {
  'actions': { 'argTypesRegex': '^on[A-Z].*' },
  'controls': {
    'matchers': {
      'color': /(background|color)$/i,
      'date': /Date$/,
    },
  },
};

addDecorator(RouterDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(ThemeEnum.LIGHT));
