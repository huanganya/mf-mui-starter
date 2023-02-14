import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from './logo';

const Story: ComponentMeta<typeof Logo> = {
  component: Logo,
  title: 'AppShared-IndicatorCarousel',
};
export default Story;

const Template: ComponentStory<typeof Logo> = (args) => {
  return <Logo />;
};

export const Primary = Template.bind({});
Primary.args = {};
