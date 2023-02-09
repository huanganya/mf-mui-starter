import { fireEvent, render } from '@testing-library/react';
import ProfileCard from '../../../src/components/home/ProfileCard';
import React from 'react';
describe('ProfileCard', () => {

  const TestComponent = () => (
    <ProfileCard
      userData={{
        userName: 'Davin Lesmana',
        userNRIC: 'S3279307Z',
        userPicture: "https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png",
      }}
    />
  );

  afterEach(()=>{jest.resetAllMocks()})

  it('should render TasksCard properly', () => {
    const { getByText } = render(<TestComponent />);
    const testImage = document.querySelector("img") as HTMLImageElement;

    expect(testImage.alt).toContain('Davin Lesmana');
    expect(getByText('Welcome Back')).toBeTruthy();
    expect(getByText('Davin Lesmana')).toBeTruthy();
    expect(getByText('GEMS')).toBeTruthy();
    expect(getByText('G-FAST')).toBeTruthy();
    expect(getByText('My Favorite Reading Materials')).toBeTruthy();
    expect(getByText('Submit Feedback')).toBeTruthy();
    expect(getByText('View e-ID Card')).toBeTruthy();
    expect(getByText('My Profile')).toBeTruthy();
  });

  it('should call top button function when top button is clicked', () => {
    const { getByText } = render(<TestComponent />);
    const consoleSpy = jest.spyOn(console, 'log');
    const button = getByText('My Profile');

    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith('My Profile Clicked');
  });

  it('should call second top button function when second button from top is clicked', () => {
    const { getByText } = render(<TestComponent />);
    const consoleSpy = jest.spyOn(console, 'log');
    const button = getByText('View e-ID Card');

    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith('View e-ID Card Clicked');
  });

  it('should call second top button function when second button from top is clicked', () => {
    const { getByText } = render(<TestComponent />);
    const consoleSpy = jest.spyOn(console, 'log');
    const button = getByText('GEMS');

    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith('button1');
  });
  it('should call second top button function when second button from top is clicked', () => {
    const { getByText } = render(<TestComponent />);
    const consoleSpy = jest.spyOn(console, 'log');
    const button = getByText('G-FAST');

    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith('button2');
  });
  it('should call second top button function when second button from top is clicked', () => {
    const { getByText } = render(<TestComponent />);
    const consoleSpy = jest.spyOn(console, 'log');
    const button = getByText('My Favorite Reading Materials');

    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith('button3');
  });
  it('should call second top button function when second button from top is clicked', () => {
    const { getByText } = render(<TestComponent />);
    const consoleSpy = jest.spyOn(console, 'log');
    const button = getByText('Submit Feedback');

    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith('button4');
  });
});

