import { Button, ThemeButton } from './Button';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';

const componentMeta: ComponentMeta<typeof Button> = {
  'title': 'shared/Button',
  'component': Button,
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  'children': 'button content',
};

export const Clear = Template.bind({});
Clear.args = {
  'theme': ThemeButton.CLEAR,
  'children': 'button content',
};

export const Outline = Template.bind({});
Outline.args = {
  'theme': ThemeButton.OUTLINE,
  'children': 'button content',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  'theme': ThemeButton.OUTLINE,
  'children': 'button content',
};
OutlineDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];

export default componentMeta;
