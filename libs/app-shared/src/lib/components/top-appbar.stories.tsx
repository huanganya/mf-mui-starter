import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TopAppbar } from './top-appbar';

const Story: ComponentMeta<typeof TopAppbar> = {
  component: TopAppbar,
  title: 'AppShared-TopAppbar',
};
export default Story;

const Template: ComponentStory<typeof TopAppbar> = (args) => {
  return <TopAppbar />;
};

export const Primary = Template.bind({});
Primary.args = {};
