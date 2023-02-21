import { MoreVert } from '@mui/icons-material';
import { MenuItem } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconMenuPopup } from './icon-menu-popup';

const Story: ComponentMeta<typeof IconMenuPopup> = {
  component: IconMenuPopup,
  title: 'Common-Others-IconMenuPopup',
};
export default Story;

const Template: ComponentStory<typeof IconMenuPopup> = (args) => {
    return (<IconMenuPopup {...args} />);
};

export const Primary = Template.bind({});

Primary.args = {
    icon: <MoreVert/>,
    buttonProps: {
        "aria-controls": 'menuPopUp',
        "aria-expanded": 'true' ,
        "aria-haspopup": "true",
        onClick: () => {},
    },
    menuProps: {
        onClose: () => {},
        anchorEl: null,
        open: false,
    },
    children: [
        <MenuItem
            key={'mark-as-read'}
            onClick={() => {}}
          >
            Mark As Read
          </MenuItem>,
          <MenuItem
            key={'mark-as-read'}
            onClick={() => {}}
          >
            Delete
          </MenuItem>,
    ]
};
