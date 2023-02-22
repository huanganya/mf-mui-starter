
import { fireEvent, getByText, render } from '@testing-library/react';
import dayjs from 'dayjs';
import { AlertBoxItem } from 'libs/app-shared/src/lib/components/alert-box-item';


describe('AlertBoxItem', () => {

  const unreadDate = new Date();
  const readDate = dayjs(unreadDate).subtract(1, 'day').toDate();
  
  const UnreadComponent = () => (
    <AlertBoxItem
        title={"Title Test Unread"}
        content={"Content Test Unread"}
        date={unreadDate}
        read={false}
    />
  );

  const ReadComponent = () => (
    <AlertBoxItem
        title={"Title Test Read"}
        content={"Content Test Read"}
        date={readDate}
        read={true}
    />
  );

  it('should render AlertBoxItem Unread State Normally', () => {
    const { getByTestId, queryAllByTestId } = render(<UnreadComponent />);
    
    // Text Data
    const title = getByTestId("alert-box-title-test-id");
    const content = getByTestId ("alert-box-content-test-id");
    const date = getByTestId ("alert-box-date-test-id"); 

    // Test Option Button And Circle
    const buttons = queryAllByTestId("alert-box-option-button-test-id");
    const circleIcons = queryAllByTestId("alert-box-circle-unread-test-id")
    
    expect(title.textContent).toBe("Title Test Unread");
    expect(content.textContent).toBe("Content Test Unread");
    expect(date.textContent).toBe(dayjs(unreadDate).format("DD MMM YYYY"));
    expect(buttons.length).toBe(1);
    expect(circleIcons.length).toBe(1);
  });

  it('should render AlertBoxItem Read State Normally', () => {
    const { getByTestId, queryAllByTestId } = render(<ReadComponent />);
    
    // Text Data
    const title = getByTestId("alert-box-title-test-id");
    const content = getByTestId ("alert-box-content-test-id");
    const date = getByTestId ("alert-box-date-test-id"); 

    // Test Option Button And Circle
    const buttons = queryAllByTestId("alert-box-option-button-test-id");
    const circleIcons = queryAllByTestId("alert-box-circle-unread-test-id")
    
    expect(title.textContent).toBe("Title Test Read");
    expect(content.textContent).toBe("Content Test Read");
    expect(date.textContent).toBe(dayjs(readDate).format("DD MMM YYYY"));
    expect(buttons.length).toBe(1);
    expect(circleIcons.length).toBe(0);
  });

//   it('could click AlertBoxItem Unread options button and show 2 enabled option', () => {
//     const { queryAllByRole, getByText} = render(<UnreadComponent />);
//     const title = getByText("Title Test Unread");
//     const button = queryAllByRole("button");
    
//     // Click Option Button and Check MenuItem
//     fireEvent.click(button[0]);
//     const menuItems = queryAllByRole("menuitem");
//     expect(menuItems.length).toBe(2);
//     fireEvent.click(title);
    
//     for (let ii=0; ii < menuItems.length; ii++){
//         fireEvent.click(button[0]);
//         const menuItems = queryAllByRole("menuitem");
//         fireEvent.click(menuItems[ii]);
//     }

//     expect(onClickMenuItemUnread).toBeCalledTimes(2);
//   });
});
