import { AlignItemsList } from '../../../src/components/others/align-itemslist';
import { fireEvent, render } from '@testing-library/react';
import { RuleOutlined } from '@mui/icons-material';

describe('AlignItemsList', () => {
  const onClick = jest.fn();
  const TestData = [
    {
      key: 0,
      id: 0,
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
      onClick: onClick,
    },
  ];

  const TestComponent = () => (
    <AlignItemsList maxWidth={360} items={TestData} />
  );

  it('should render AlignItemsList properly', async () => {
    const { getByRole } = render(<TestComponent />);
    expect(getByRole('list')).toBeTruthy();
  });

  it('should render its child value', async () => {
    const { getByRole } = render(<TestComponent />);

    expect(getByRole('listitem')).toBeTruthy();
  });

  it('should do onClick when its child is clicked', async () => {
    const { getByText } = render(<TestComponent />);

    fireEvent.click(getByText('Brunch this weekend?'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
