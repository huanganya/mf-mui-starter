import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToggleButtons } from './toggle-buttons';

const Story: ComponentMeta<typeof ToggleButtons> = {
  component: ToggleButtons,
  title: 'ToggleButtons',
};
export default Story;

const Template: ComponentStory<typeof ToggleButtons> = (args) => (
  <ToggleButtons {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
