import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../config/storybook/decorators/ThemeDecorator';
import { Modal } from './Modal';

const componentMeta: ComponentMeta<typeof Modal> = {
  'title': 'widgets/Modal',
  'component': Modal,
  'args': {
    'isOpen': true,
    'children': 'amma modal children',
  },
};

const Template: ComponentStory<typeof Modal> = (args) => (
  <>
    <div id={'modal-portal'}/>
    <Modal {...args}/>
  </>
);

export const ModalLight = Template.bind({});
export const ModalDark = Template.bind({});
ModalDark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
];

export default componentMeta;
