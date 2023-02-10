import { Typography } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IndicatorCarousel } from './indicator-carousel';

const Story: ComponentMeta<typeof IndicatorCarousel> = {
  component: IndicatorCarousel,
  title: 'AppShared-IndicatorCarousel',
};
export default Story;

const Template: ComponentStory<typeof IndicatorCarousel> = (args) => {
  return <IndicatorCarousel {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: [
    <Typography sx={{ textAlign: 'center' }}>Item 1</Typography>,
    <Typography sx={{ textAlign: 'center' }}>Item 2</Typography>,
    <Typography sx={{ textAlign: 'center' }}>Item 3</Typography>,
  ],
};
