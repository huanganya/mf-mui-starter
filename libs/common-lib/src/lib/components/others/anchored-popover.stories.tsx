import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AnchoredPopover } from './anchored-popover';

const Story: ComponentMeta<typeof AnchoredPopover> = {
  component: AnchoredPopover,
  title: 'Common-AnchoredPopover',
};
export default Story;

const Template: ComponentStory<typeof AnchoredPopover> = (args) => (
  <AnchoredPopover {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
