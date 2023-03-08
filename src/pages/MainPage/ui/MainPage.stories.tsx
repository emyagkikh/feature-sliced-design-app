import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

const componentMeta: ComponentMeta<typeof MainPage> = {
  'title': 'pages/MainPage',
  'component': MainPage,
};

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage />;

export const MainPageLight = Template.bind({});

export const MainPageDark = Template.bind({});
MainPageDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];

export default componentMeta;
