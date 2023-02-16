import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchBar } from './search-bar';

const Story: ComponentMeta<typeof SearchBar> = {
  component: SearchBar,
  title: 'Common-Others-SearchBar',
};
export default Story;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
