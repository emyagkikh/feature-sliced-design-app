import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

export default {
  'title': 'pages/MainPage',
  'component': MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args}/>;

export const MainPageLight = Template.bind({});

export const MainPageDark = Template.bind({});
MainPageDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];
