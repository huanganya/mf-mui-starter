import React from 'react';
import Carousel from 'react-material-ui-carousel';

export const IndicatorCarousel = ({
  children,
}: {
  children: React.ReactElement[];
}) => {
  return (
    <Carousel
      navButtonsAlwaysVisible={true}
      indicatorIconButtonProps={{
        style: {
          margin: '20px',
          color: 'rgba(27, 33, 37, 0.23)',
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          borderRadius: '5px',
          color: '#333333',
          width: '20px',
          height: '10px',
          background: '#333333',
        },
      }}
      autoPlay={false}
    >
      {children.map((child) => child)}
    </Carousel>
  );
};
