import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HomeCarousel } from './home-carousel';

const Story: ComponentMeta<typeof HomeCarousel> = {
  component: HomeCarousel,
  title: 'Shell-HomeCarousel',
};
export default Story;

const Template: ComponentStory<typeof HomeCarousel> = (args) => (
  <HomeCarousel />
);

export const Primary = Template.bind({});
Primary.args = {};
