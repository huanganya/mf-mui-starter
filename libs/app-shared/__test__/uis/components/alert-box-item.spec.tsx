
import { cleanup, fireEvent, render } from '@testing-library/react';
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

  const WithActionButtonComponent = () => (
    <AlertBoxItem
        title={"Title Test Read"}
        content={"Content Test Read"}
        date={readDate}
        read={true}
        actionButtonProps={{ 
            variant: "contained", 
            color: "primary", 
            content: "Go to this page", 
            url: "/alerts",
            size: "small",
            sx:{
              minWidth: "100px",
              maxWidth: "120px"
            }
        }}
    />
  );

  afterEach(() => {
    cleanup();
  });

  it('should render AlertBoxItem Unread State Normally', () => {
    const { getByTestId, queryAllByTestId } = render(<UnreadComponent />);
    
    // Text Data
    const title = getByTestId("alert-box-item-title-test-id");
    const content = getByTestId ("alert-box-item-content-test-id");
    const date = getByTestId ("alert-box-item-date-test-id"); 

    // Test Option Button And Circle
    const buttons = queryAllByTestId("alert-box-item-option-button-test-id");
    const circleIcons = queryAllByTestId("alert-box-item-circle-unread-test-id");
    
    expect(title.textContent).toBe("Title Test Unread");
    expect(content.textContent).toBe("Content Test Unread");
    expect(date.textContent).toBe(dayjs(unreadDate).format("DD MMM YYYY"));
    expect(buttons.length).toBe(1);
    expect(circleIcons.length).toBe(1);
  });

  it('should render AlertBoxItem Read State Normally', () => {
    const { getByTestId, queryAllByTestId } = render(<ReadComponent />);
    
    // Text Data
    const title = getByTestId("alert-box-item-title-test-id");
    const content = getByTestId ("alert-box-item-content-test-id");
    const date = getByTestId ("alert-box-item-date-test-id"); 

    // Test Option Button And Circle
    const buttons = queryAllByTestId("alert-box-item-option-button-test-id");
    const circleIcons = queryAllByTestId("alert-box-item-circle-unread-test-id");
    
    expect(title.textContent).toBe("Title Test Read");
    expect(content.textContent).toBe("Content Test Read");
    expect(date.textContent).toBe(dayjs(readDate).format("DD MMM YYYY"));
    expect(buttons.length).toBe(1);
    expect(circleIcons.length).toBe(0);
  });

  it('should render AlertBoxItem with ActionButton Normally', () => {
    const { getByTestId, queryAllByTestId } = render(<WithActionButtonComponent />);
    
    // Text Data
    const title = getByTestId("alert-box-item-title-test-id");
    const content = getByTestId ("alert-box-item-content-test-id");
    const date = getByTestId ("alert-box-item-date-test-id"); 

    // Test Option Button And Circle
    const optionButtons = queryAllByTestId("alert-box-item-option-button-test-id");
    const actionButtons = queryAllByTestId("alert-box-action-button-id");
    const circleIcons = queryAllByTestId("alert-box-item-circle-unread-test-id");
    
    expect(title.textContent).toBe("Title Test Read");
    expect(content.textContent).toBe("Content Test Read");
    expect(date.textContent).toBe(dayjs(readDate).format("DD MMM YYYY"));
    expect(optionButtons.length).toBe(1);
    expect(circleIcons.length).toBe(0);
    expect(actionButtons.length).toBe(1);
  });

  it('when option button click, it should be shown popup menu with two option', () => {
    [<UnreadComponent/>, <ReadComponent/>].forEach((component) => {
        const {getByTestId, queryAllByRole} = render(component);
    
        const optionButton = getByTestId("alert-box-item-option-button-test-id");
        fireEvent.click(optionButton);
    
        const optionsMenuItems = queryAllByRole("menuitem");
        expect(optionsMenuItems.length).toBe(2);
        cleanup();
    })
  });


  it('[Unread] option menu item closed the menu popover when clicked', () => {
    const {getByTestId, queryAllByRole} = render(<UnreadComponent/>);
    
    // Test Option Button And Circle
    const optionButton = getByTestId("alert-box-item-option-button-test-id");
    fireEvent.click(optionButton);
    const optionMenuItemLength = queryAllByRole("menuitem").length;

    // close menu
    const title = getByTestId("alert-box-item-title-test-id");
    fireEvent.click(title);

    for (let ii = 0; ii < optionMenuItemLength; ii++){
        fireEvent.click(optionButton);
        let optionsMenuItems = queryAllByRole("menuitem");
        fireEvent.click(optionsMenuItems[ii]);
        
        // menu should be closed
        optionsMenuItems = queryAllByRole("menuitem");
        expect(optionsMenuItems.length).toBe(0);
    }
  });

  it('when clicked, action button opens a new page', () => {
    const mockWindowOpen = jest.fn((url?: string | URL, target?: string, features?: string) => null);
    const windowSpy = jest.spyOn(window, "open").mockImplementation(mockWindowOpen);
    
    const { getByTestId } = render(<WithActionButtonComponent />);
    // Test Option Button And Circle
    const actionButton = getByTestId("alert-box-action-button-id");
    fireEvent.click(actionButton);

    expect(mockWindowOpen).toBeCalledTimes(1);
    windowSpy.mockRestore();
  });


});
