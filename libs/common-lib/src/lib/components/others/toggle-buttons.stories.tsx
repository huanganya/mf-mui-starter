import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToggleButtons } from './toggle-buttons';

const Story: ComponentMeta<typeof ToggleButtons> = {
  component: ToggleButtons,
  title: 'Common-Others-ToggleButtons',
};
export default Story;

const Template: ComponentStory<typeof ToggleButtons> = (args) => (
  <ToggleButtons {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { value: 'Button 1', label: 'Button 1', badge: 10 },
    { value: 'Button 2', label: 'Button 2' },
  ],
  onClick: (value: string) => {
    console.log('clicked', value);
  },
};
