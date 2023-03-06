import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { LangSwitcher } from './LangSwitcher';

export default {
  'title': 'features/LangSwitcher',
  'component': LangSwitcher,
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args}/>;

export const LangSwitcherLight = Template.bind({});

export const LangSwitcherDark = Template.bind({});
LangSwitcherDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];
