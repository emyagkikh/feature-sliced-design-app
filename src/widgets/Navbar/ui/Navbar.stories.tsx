import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';

const componentMeta: ComponentMeta<typeof Navbar> = {
  'title': 'widgets/Navbar',
  'component': Navbar,
};

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args}/>;

export const NavbarLight = Template.bind({});
export const NavbarDark = Template.bind({});
NavbarDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];

export default componentMeta;
