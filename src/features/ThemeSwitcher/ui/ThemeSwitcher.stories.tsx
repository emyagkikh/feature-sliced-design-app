import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

const componentMeta: ComponentMeta<typeof ThemeSwitcher> = {
  'title': 'features/ThemeSwitcher',
  'component': ThemeSwitcher,
};

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args}/>;

export const ThemeSwitcherLight = Template.bind({});

export const ThemeSwitcherDark = Template.bind({});
ThemeSwitcherDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];

export default componentMeta;
