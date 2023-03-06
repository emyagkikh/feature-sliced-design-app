import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import NotFoundPage from './NotFoundPage';

export default {
  'title': 'pages/NotFoundPage',
  'component': NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args}/>;

export const NotFoundPageLight = Template.bind({});

export const NotFoundPageDark = Template.bind({});
NotFoundPageDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];
