import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoopPagination } from './loop-pagination';
import InfoIcon from '@mui/icons-material/Info';

const Story: ComponentMeta<typeof LoopPagination> = {
  component: LoopPagination,
  title: 'Shell-LoopPagination',
};
export default Story;

const Template: ComponentStory<typeof LoopPagination> = (args) => (
  <LoopPagination {...args} />
);

const notificationCard = [
  {
    link: '',
    hasLink: false,
    linkText: '',
    primaryText: 'Example: ABC Survey has been launched!',
    secondaryText: 'Please complete ABC Survey by DDMMYYYY.',
    icon: (
      <InfoIcon
        sx={{
          color: '#2C6ECB',
          paddingLeft: '10px',
          borderRadius: '5px',
        }}
      />
    ),
  },
  {
    link: '',
    hasLink: false,
    linkText: '',
    primaryText: 'Example: XZY Survey has been launched!',
    secondaryText: 'Please complete XZY Survey by DDMMYYYY.',
    icon: '',
  },
  {
    link: '',
    hasLink: false,
    linkText: '',
    primaryText: 'hello',
    secondaryText: 'byebye',
    icon: '',
  },
];

export const Primary = Template.bind({});
Primary.args = {
  totalPage: notificationCard.length
};
