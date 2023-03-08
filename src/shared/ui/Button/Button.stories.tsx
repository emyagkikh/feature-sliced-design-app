import { Button, ButtonSize, ButtonTheme } from './Button';
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
  'theme': ButtonTheme.CLEAR,
  'children': 'button content',
};

export const Outline = Template.bind({});
Outline.args = {
  'theme': ButtonTheme.OUTLINE,
  'children': 'button content',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  'theme': ButtonTheme.OUTLINE,
  'children': 'button content',
};
OutlineDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];

export const Background = Template.bind({});
Background.args = {
  'theme': ButtonTheme.BACKGROUND,
  'children': 'button content',
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  'theme': ButtonTheme.BACKGROUND,
  'children': 'button content',
};
BackgroundDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];

export const SquareM = Template.bind({});
SquareM.args = {
  'theme': ButtonTheme.BACKGROUND,
  'size': ButtonSize.M,
  'isSquare': true,
  'children': ':)',
};

export const SquareMDark = Template.bind({});
SquareMDark.args = {
  'theme': ButtonTheme.BACKGROUND,
  'size': ButtonSize.M,
  'isSquare': true,
  'children': ':)',
};
SquareMDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];

export const SquareL = Template.bind({});
SquareL.args = {
  'theme': ButtonTheme.BACKGROUND,
  'size': ButtonSize.L,
  'isSquare': true,
  'children': ':)',
};

export const SquareLDark = Template.bind({});
SquareLDark.args = {
  'theme': ButtonTheme.BACKGROUND,
  'size': ButtonSize.L,
  'isSquare': true,
  'children': ':)',
};
SquareLDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];

export const SquareXL = Template.bind({});
SquareXL.args = {
  'theme': ButtonTheme.BACKGROUND,
  'size': ButtonSize.XL,
  'isSquare': true,
  'children': ':)',
};

export const SquareXLDark = Template.bind({});
SquareXLDark.args = {
  'theme': ButtonTheme.BACKGROUND,
  'size': ButtonSize.XL,
  'isSquare': true,
  'children': ':)',
};
SquareXLDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];

export default componentMeta;
