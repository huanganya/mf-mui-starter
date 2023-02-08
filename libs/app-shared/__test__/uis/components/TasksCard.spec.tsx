import { ArrowRightAltOutlined, MessageOutlined } from '@mui/icons-material';
import { fireEvent, render } from '@testing-library/react';
import { TasksCard } from '../../../uis/components/TasksCard';

describe('TasksCard', () => {
  const onMouseClickCallback = jest.fn();
  const onMouseClick2Callback = jest.fn();

  const TestData = [
    {
      id: '1',
      taskTitle: 'Macrodata Refinement:Remove Scary Numbers',
      taskCategory: 'MDR',
      taskIcon: <MessageOutlined style={{ height: '20px', width: '20px' }} />,
      buttonText: 'Click to Refine',
      buttonClass: 'primary',
      buttonIcon: <ArrowRightAltOutlined />,
      handleButtonFunction: onMouseClickCallback,
    },
    {
      id: '2',
      taskTitle: 'Optics and Design:Hang Up New Paintings',
      taskCategory: 'O&D',
      taskIcon: <MessageOutlined style={{ height: '20px', width: '20px' }} />,
      buttonText: 'Click to Hang',
      buttonClass: 'primary',
      buttonIcon: <ArrowRightAltOutlined />,
      handleButtonFunction: onMouseClick2Callback,
    },
  ];

  const TestComponent = () => <TasksCard listOfTasks={TestData} numberOfTasks={2} />;

  it('should render TasksCard properly', () => {
    const { getByText } = render(<TestComponent />);

    expect(getByText('O&D')).toBeTruthy();
    expect(getByText('MDR')).toBeTruthy();
    expect(getByText('Optics and Design:Hang Up New Paintings')).toBeTruthy();
    expect(getByText('Macrodata Refinement:Remove Scary Numbers')).toBeTruthy();
    expect(getByText('Click to Refine')).toBeTruthy();
    expect(getByText('Click to Hang')).toBeTruthy();
  });

  it('should call button function when button is clicked', () => {
    const { getByText } = render(<TestComponent />);

    const button = getByText('Click to Refine');
    fireEvent.click(button);

    expect(onMouseClickCallback).toBeCalledWith('/');
  });

  it('should call second button function when button from second task is clicked', () => {
    const { getByText } = render(<TestComponent />);

    const button = getByText('Click to Hang');
    fireEvent.click(button);

    expect(onMouseClick2Callback).toBeCalledWith('/');
  });
});
