import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageThree } from './page-three';

const Story: ComponentMeta<typeof PageThree> = {
  component: PageThree,
  title: 'Remote-PageThree',
};
export default Story;

const Template: ComponentStory<typeof PageThree> = (args) => <PageThree />;

export const Primary = Template.bind({});
Primary.args = {};
