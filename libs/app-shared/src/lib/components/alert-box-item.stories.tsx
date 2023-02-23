import { Button } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlertBoxItem } from './alert-box-item';

const Story: ComponentMeta<typeof AlertBoxItem> = {
  component: AlertBoxItem,
  title: 'AppShared-AlertBoxItem',
};
export default Story;

const Template: ComponentStory<typeof AlertBoxItem> = (args) => {
  return <AlertBoxItem {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  title: "hello",
  content: "hello content",
  date: new Date(),
  read: false,
};

export const withActionButton = Template.bind({});
withActionButton.args = {
  title: "hello",
  content: "hello content",
  date: new Date(),
  read: false,
  actionComponent: (
    <Button
      variant={"contained"}
      color={"primary"}
      size={"small"}
      sx={{
        minWidth: "100px",
        maxWidth: "120px"
      }}
      onClick={() => {}}
      >
        Go to this page
    </Button>
  ),
};