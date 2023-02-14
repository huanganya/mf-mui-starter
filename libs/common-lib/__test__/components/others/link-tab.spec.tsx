import { LinkTab } from '../../../src/lib/components/others/link-tab';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('LinkTab', () => {
  const onMouseOverCallback = jest.fn();

  const TestComponent = () => (
    <BrowserRouter>
      <LinkTab
        label={'testLinkTab'}
        href={'/test'}
        onMouseOver={onMouseOverCallback}
      />
    </BrowserRouter>
  );

  const TestComponentNoHREF = () => (
    <BrowserRouter>
      <LinkTab label={'testLinkTab'} />
    </BrowserRouter>
  );

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render LinkTab properly', async () => {
    const { getByText } = render(<TestComponent />);

    expect(getByText('testLinkTab')).toBeTruthy();
  });

  it('should redirect if mouse click', async () => {
    const { getByText } = render(<TestComponent />);

    fireEvent.click(getByText('testLinkTab'));

    expect(mockUseNavigate).toBeCalledWith('/test');
  });

  it('should redirect if mouse click even with no href prop', async () => {
    const { getByText } = render(<TestComponentNoHREF />);

    fireEvent.click(getByText('testLinkTab'));

    expect(mockUseNavigate).toBeCalledWith('/');
  });

  it('should do props action if mouse over', async () => {
    const { getByText } = render(<TestComponent />);

    fireEvent.mouseOver(getByText('testLinkTab'));

    expect(onMouseOverCallback).toHaveBeenCalledTimes(1);
  });

  it('should not do props action if mouse over but no mouseover prop', async () => {
    const { getByText } = render(<TestComponentNoHREF />);

    fireEvent.mouseOver(getByText('testLinkTab'));

    expect(onMouseOverCallback).toHaveBeenCalledTimes(0);
  });
});
