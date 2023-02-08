import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Badge } from '@mui/material';

export interface ToggleButtonsProp {
  value: string;
  label: string;
  badge?: number;
}
export const ToggleButtons = ({
  options,
  onClick,
}: {
  options: ToggleButtonsProp[];
  onClick: (value: string) => void;
}) => {
  const [value, setValue] = React.useState(options[0].value);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string
  ) => {
    setValue(newValue);
    onClick(newValue);
  };

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      fullWidth
    >
      {options.map((item, index) => (
        <ToggleButton key={index} value={item.value}>
          {item.label}
          {item.badge && (
            <Badge
              sx={{ marginLeft: '20px' }}
              badgeContent={item.badge}
              color="primary"
            />
          )}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
