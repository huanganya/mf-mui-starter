import { RuleOutlined } from '@mui/icons-material';
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
Primary.args = {
  items: [
    {
      icon: (
        <RuleOutlined
          sx={{
            backgroundColor: '#F8ECEE',
            color: '#BE4651',
            padding: '10px',
            borderRadius: '5px',
          }}
        />
      ),
      primary: 'Brunch this weekend?',
      secondary: "— I'll be in your neighborhood doing errands this…",
      onClick: () => {
        console.log('clicked');
      },
      testId: 'profile-list-item1',
    },
  ],
};
