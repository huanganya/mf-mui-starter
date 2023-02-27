import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TrainingCourses } from './training-courses';

const Story: ComponentMeta<typeof TrainingCourses> = {
  component: TrainingCourses,
  title: 'Remote2-Path1',
};
export default Story;

const Template: ComponentStory<typeof TrainingCourses> = (args) => <TrainingCourses />;

export const Primary = Template.bind({});
Primary.args = {};
