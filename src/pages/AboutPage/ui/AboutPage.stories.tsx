import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

const componentMeta: ComponentMeta<typeof AboutPage> = {
  'title': 'pages/AboutPage',
  'component': AboutPage,
};

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage />;

export const AboutPageLight = Template.bind({});

export const AboutPageDark = Template.bind({});
AboutPageDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];

export default componentMeta;
