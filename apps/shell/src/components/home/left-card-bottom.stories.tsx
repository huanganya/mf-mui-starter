import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LeftCardBottom } from './left-card-bottom';

const Story: ComponentMeta<typeof LeftCardBottom> = {
  component: LeftCardBottom,
  title: 'Shell-LeftCardBottom',
};
export default Story;

const Template: ComponentStory<typeof LeftCardBottom> = (args) => (
  <LeftCardBottom />
);

export const Primary = Template.bind({});
Primary.args = {};
