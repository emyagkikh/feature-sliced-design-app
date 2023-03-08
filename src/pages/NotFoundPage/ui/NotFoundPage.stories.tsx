import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import NotFoundPage from './NotFoundPage';

const componentMeta: ComponentMeta<typeof NotFoundPage> = {
  'title': 'pages/NotFoundPage',
  'component': NotFoundPage,
};

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args}/>;

export const NotFoundPageLight = Template.bind({});

export const NotFoundPageDark = Template.bind({});
NotFoundPageDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];

export default componentMeta;
