import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { PageError } from './PageError';

export default {
  'title': 'widgets/PageError',
  'component': PageError,
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args}/>;

export const PageErrorLight = Template.bind({});
export const PageErrorDark = Template.bind({});
PageErrorDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];
