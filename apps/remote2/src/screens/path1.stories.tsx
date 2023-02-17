import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Path1 } from './path1';

const Story: ComponentMeta<typeof Path1> = {
  component: Path1,
  title: 'Remote2-Path1',
};
export default Story;

const Template: ComponentStory<typeof Path1> = (args) => <Path1 />;

export const Primary = Template.bind({});
Primary.args = {};
