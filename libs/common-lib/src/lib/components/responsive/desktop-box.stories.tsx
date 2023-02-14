import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DesktopBox } from './desktop-box';

const Story: ComponentMeta<typeof DesktopBox> = {
  component: DesktopBox,
  title: 'Common-DesktopBox',
};
export default Story;

const Template: ComponentStory<typeof DesktopBox> = (args) => (
  <DesktopBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
