import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BottomFooter } from './bottom-footer';

const Story: ComponentMeta<typeof BottomFooter> = {
  component: BottomFooter,
  title: 'AppShared-BottomFooter',
};
export default Story;

const Template: ComponentStory<typeof BottomFooter> = (args) => {
  return <BottomFooter {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
