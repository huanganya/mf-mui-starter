import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CalendarButtons } from './calendar-buttons';

const Story: ComponentMeta<typeof CalendarButtons> = {
  component: CalendarButtons,
  title: 'Shell-CalendarButtons',
};
export default Story;

const Template: ComponentStory<typeof CalendarButtons> = (args) => (
  <CalendarButtons />
);

export const Primary = Template.bind({});
Primary.args = {};
