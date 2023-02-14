import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CalendarItems } from './calendar-items';

const Story: ComponentMeta<typeof CalendarItems> = {
  component: CalendarItems,
  title: 'Shell-CalendarItems',
};
export default Story;

const Template: ComponentStory<typeof CalendarItems> = (args) => (
  <CalendarItems />
);

export const Primary = Template.bind({});
Primary.args = {};
