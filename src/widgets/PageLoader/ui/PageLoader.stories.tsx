import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { PageLoader } from './PageLoader';

const componentMeta: ComponentMeta<typeof PageLoader> = {
  'title': 'widgets/PageLoader',
  'component': PageLoader,
};

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args}/>;

export const PageLoaderLight = Template.bind({});
export const PageLoaderDark = Template.bind({});
PageLoaderDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];

export default componentMeta;
