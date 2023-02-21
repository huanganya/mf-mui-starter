
import { fireEvent, getByText, render } from '@testing-library/react';
import dayjs from 'dayjs';
import { AlertBoxItem } from 'libs/app-shared/src/lib/components/alert-box-item';


describe('AlertBoxItem', () => {

  const unreadDate = new Date();
  const readDate = dayjs(unreadDate).subtract(1, 'day').toDate();
  
  const onClickMenuItemUnread = jest.fn();
  const onClickMenuItemRead = jest.fn();

  const UnreadComponent = () => (
    <AlertBoxItem
        item = {{
            title: "Title Test Unread",
            content: "Content Test Unread",
            date: unreadDate,
            read: false,
        }}
        onClickMenuItem={onClickMenuItemUnread}
    />
  );

  const ReadComponent = () => (
    <AlertBoxItem
        item = {{
            title: "Title Test Read",
            content: "Content Test Read",
            date: readDate,
            read: true,
        }}
        onClickMenuItem={onClickMenuItemRead}
    />
  );

  it('should render AlertBoxItem Unread State Normally', () => {
    const { queryAllByRole, queryAllByText, container } = render(<UnreadComponent />);
    
    // Text Data
    const title = queryAllByText("Title Test Unread");
    const content = queryAllByText("Content Test Unread");
    const date = queryAllByText(dayjs(unreadDate).format("DD MMM YYYY"));

    //Button
    const button = queryAllByRole("button");
    const svg = container.querySelectorAll("svg");

    
    expect(title.length).toBe(1);
    expect(content.length).toBe(1);
    expect(date.length).toBe(1);
    expect(button.length).toBe(1);
    expect(svg.length).toBe(2);
  });

  it('should render AlertBoxItem Read State Normally', () => {
    const { queryAllByRole, queryAllByText, container } = render(<ReadComponent />);
    
    // Text Data
    const title = queryAllByText("Title Test Read");
    const content = queryAllByText("Content Test Read");
    const date = queryAllByText(dayjs(readDate).format("DD MMM YYYY"));

    //Button
    const button = queryAllByRole("button");
    const svg = container.querySelectorAll("svg");

    expect(title.length).toBe(1);
    expect(content.length).toBe(1);
    expect(date.length).toBe(1);
    expect(button.length).toBe(1);
    expect(svg.length).toBe(1);
  });

  it('could click AlertBoxItem Unread options button and show 2 enabled option', () => {
    const { queryAllByRole, getByText} = render(<UnreadComponent />);
    const title = getByText("Title Test Unread");
    const button = queryAllByRole("button");
    
    // Click Option Button and Check MenuItem
    fireEvent.click(button[0]);
    const menuItems = queryAllByRole("menuitem");
    expect(menuItems.length).toBe(2);
    fireEvent.click(title);
    
    for (let ii=0; ii < menuItems.length; ii++){
        fireEvent.click(button[0]);
        const menuItems = queryAllByRole("menuitem");
        fireEvent.click(menuItems[ii]);
    }

    expect(onClickMenuItemUnread).toBeCalledTimes(2);
  });

//  TODO: Find problem why clickFunction triggers when clicking disabled menu item
//   it('could click AlertBoxItem Read options button and show 1 disabled option and 1 enabled option', () => {
//     const { queryAllByRole, getByText} = render(<ReadComponent />);
//     const title = getByText("Title Test Read");
//     const button = queryAllByRole("button");
    
//     // Click Option Button and Check MenuItem
//     fireEvent.click(button[0]);
//     const menuItems = queryAllByRole("menuitem");
//     expect(menuItems.length).toBe(2);
//     fireEvent.click(title);
    
//     for (let ii=0; ii < menuItems.length; ii++){
//         fireEvent.click(button[0]);
//         const menuItem = queryAllByRole("menuitem")[ii];
//         if (ii === 0) console.log(menuItem);
//         fireEvent.click(menuItem);
//         fireEvent.click(title);
//     }

//     expect(onClickMenuItemRead).toBeCalledTimes(1);
//   });

});
