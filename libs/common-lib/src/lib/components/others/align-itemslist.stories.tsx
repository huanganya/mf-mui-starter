import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlignItemsList } from './align-itemslist';

const Story: ComponentMeta<typeof AlignItemsList> = {
  component: AlignItemsList,
  title: 'AlignItemsList',
};
export default Story;

const Template: ComponentStory<typeof AlignItemsList> = (args) => (
  <AlignItemsList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
