import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HomeCalendar } from './home-calendar';

const Story: ComponentMeta<typeof HomeCalendar> = {
  component: HomeCalendar,
  title: 'Shell-HomeCalendar',
};
export default Story;

const Template: ComponentStory<typeof HomeCalendar> = (args) => (
  <HomeCalendar />
);

export const Primary = Template.bind({});
Primary.args = {};
