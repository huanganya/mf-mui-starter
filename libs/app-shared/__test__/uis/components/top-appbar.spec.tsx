import { TopAppbar } from '@mf-mui-starter/app-shared';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('TopAppBar', () => {
  const TestHome = () => {
    return <div>Home</div>;
  };

  const TestComponent = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestHome />} />
      </Routes>
      <TopAppbar />
    </BrowserRouter>
  );

  it('should render TopAppBar properly', () => {
    const { getAllByRole } = render(<TestComponent />);

    const tabs = getAllByRole('tab');
    expect(tabs[0].innerHTML).toContain('Home');
    expect(tabs[1].innerHTML).toContain('Remote 1');
    expect(tabs[2].innerHTML).toContain('Remote 2');
    expect(tabs[3].innerHTML).toContain('Remote 3');
  });

  it('should call navigate with "/" when Home is clicked', () => {
    const { getAllByRole } = render(<TestComponent />);

    const tabs = getAllByRole('tab');
    fireEvent.click(tabs[0]);

    expect(mockUseNavigate).toBeCalledWith('/');
  });

  it('should show popover menu when Remote 1 is clicked', () => {
    const { getAllByRole, getByTestId } = render(<TestComponent />);

    const tabs = getAllByRole('tab');
    fireEvent.click(tabs[1]);

    expect(getByTestId('remote-1-menu-1')).toBeTruthy();
    expect(getByTestId('remote-1-menu-2')).toBeTruthy();
    expect(getByTestId('remote-1-menu-3')).toBeTruthy();
  });
});
