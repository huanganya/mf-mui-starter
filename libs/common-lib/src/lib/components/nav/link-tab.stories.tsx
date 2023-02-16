import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkTab } from './link-tab';

const Story: ComponentMeta<typeof LinkTab> = {
  component: LinkTab,
  title: 'Common-Nav-LinkTab',
  argTypes: {
    onMouseOver: { action: 'onMouseOver executed!' },
  },
};
export default Story;

const Template: ComponentStory<typeof LinkTab> = (args) => (
  <LinkTab {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: '',
  href: '',
};
