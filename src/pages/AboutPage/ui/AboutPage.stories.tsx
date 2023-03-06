import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

export default {
  'title': 'pages/AboutPage',
  'component': AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args}/>;

export const AboutPageLight = Template.bind({});

export const AboutPageDark = Template.bind({});
AboutPageDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];
