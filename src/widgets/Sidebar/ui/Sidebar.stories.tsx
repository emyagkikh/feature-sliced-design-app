import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';

export default {
  'title': 'widgets/Sidebar',
  'component': Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args}/>;

export const SidebarLight = Template.bind({});
export const SidebarDark = Template.bind({});
SidebarDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];
