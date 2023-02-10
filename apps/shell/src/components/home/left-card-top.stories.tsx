import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LeftCardTop } from './left-card-top';

const Story: ComponentMeta<typeof LeftCardTop> = {
  component: LeftCardTop,
  title: 'Shell-LeftCardTop',
};
export default Story;

const Template: ComponentStory<typeof LeftCardTop> = (args) => <LeftCardTop />;

export const Primary = Template.bind({});
Primary.args = {};
