import { AppLink, AppLinkTheme } from './AppLink';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';

export default {
  'title': 'shared/AppLink',
  'component': AppLink,
  'args': {
    'children': 'app link content',
    'to': '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args}/>;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  'theme': AppLinkTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  'theme': AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];

export const SecondaryLight = Template.bind({});
SecondaryLight.args = {
  'theme': AppLinkTheme.SECONDARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  'theme': AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];
