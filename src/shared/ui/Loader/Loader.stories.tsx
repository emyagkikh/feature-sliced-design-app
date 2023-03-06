import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { Loader } from 'shared/ui/Loader/Loader';

export default {
  'title': 'shared/Loader',
  'component': Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args}/>;

export const LoaderLight = Template.bind({});

export const LoaderDark = Template.bind({});
LoaderDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];
