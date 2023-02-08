import { fireEvent, render, waitFor } from '@testing-library/react';
import { DesktopTabs } from '../../../src/components/appbar/desktop-tabs';
import { BrowserRouter } from 'react-router-dom';
import { SearchOutlined } from '@mui/icons-material';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

const pageTabs = [
  { title: 'Home', link: '/' },
  {
    title: 'Remote 1',
    renderComponent: (handleClose: () => void) => <h1 onClick={handleClose}>Remote 1 content</h1>,
  },
  {
    title: 'Search',
    icon: <SearchOutlined />,
    renderComponent: (handleClose: () => void) => <h1 onClick={handleClose}>>Search content</h1>,
  },
];

describe('DesktopTabs', () => {
  const TestComponent = () => (
    <BrowserRouter>
      <DesktopTabs pageTabs={pageTabs} />
    </BrowserRouter>
  );

  it('should render DesktopTabs properly', () => {
    const { getAllByRole } = render(<TestComponent />);

    const tabs = getAllByRole('tab');
    expect(tabs[0].innerHTML).toContain('Home');
    expect(tabs[1].innerHTML).toContain('Remote 1');
    expect(tabs[2].innerHTML).toContain('Search');
  });

  it('should call navigate with "/" when Home is clicked', () => {
    const { getAllByRole } = render(<TestComponent />);

    const tabs = getAllByRole('tab');
    fireEvent.click(tabs[0]);

    expect(mockUseNavigate).toBeCalledWith('/');
  });

  it('should show popover content when Remote 1 is clicked', () => {
    const { getAllByRole, getByText } = render(<TestComponent />);

    const tabs = getAllByRole('tab');
    fireEvent.click(tabs[1]);

    expect(getByText('Remote 1 content')).toBeTruthy();
  });

  it('should show popover content when Remote 1 is triggered by onmouseover', () => {
    const { getAllByRole, getByText } = render(<TestComponent />);

    const tabs = getAllByRole('tab');
    fireEvent.mouseOver(tabs[1]);

    expect(getByText('Remote 1 content')).toBeTruthy();
  });

  it('should show selected tab triggered by onmouseover', async () => {
    const { getAllByRole } = render(<TestComponent />);
    const tabs = getAllByRole('tab');

    fireEvent.mouseOver(tabs[1]);

    await waitFor(() => {
      expect(tabs[0].getAttribute('aria-selected')).toEqual('false');
      expect(tabs[1].getAttribute('aria-selected')).toEqual('true');
    });

    fireEvent.mouseOver(tabs[0]);

    await waitFor(() => {
      expect(tabs[0].getAttribute('aria-selected')).toEqual('true');
      expect(tabs[1].getAttribute('aria-selected')).toEqual('false');
    });
  });

  it('should close popover if clicked inside the popover', async () => {
    const { getAllByRole, getByText, queryByText } = render(<TestComponent />);
    const tabs = getAllByRole('tab');

    fireEvent.click(tabs[1]);
    fireEvent.click(getByText('Remote 1 content'));

    await waitFor(() => {
      expect(queryByText('Remote 1 content')).toBeFalsy();
    });
  });
});
