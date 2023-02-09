import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LocalizedDatePicker } from './localized-datepicker';

const Story: ComponentMeta<typeof LocalizedDatePicker> = {
  component: LocalizedDatePicker,
  title: 'LocalizedDatePicker',
};
export default Story;

const Template: ComponentStory<typeof LocalizedDatePicker> = (args) => (
  <LocalizedDatePicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
