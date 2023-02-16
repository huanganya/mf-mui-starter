import { ArrowRightAltOutlined, SearchOutlined } from '@mui/icons-material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconTextField } from './icon-text-field';

const Story: ComponentMeta<typeof IconTextField> = {
  component: IconTextField,
  title: 'Common-Others-IconTextField',
};
export default Story;

const Template: ComponentStory<typeof IconTextField> = (args) => (
  <IconTextField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'standard',
  margin: 'normal',
  placeholder: 'Search field ?',
  fullWidth: false,
  InputProps: { disableUnderline: true },
  iconStart: <SearchOutlined />,
  iconEnd: <ArrowRightAltOutlined />,
};
