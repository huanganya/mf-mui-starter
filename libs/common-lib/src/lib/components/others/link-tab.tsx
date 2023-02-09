import Tab from '@mui/material/Tab';
import { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

interface LinkTabProps {
  label?: string;
  href?: string;
  onMouseOver?: () => void;
}

export const LinkTab = (props: LinkTabProps) => {
  const navigate = useNavigate();
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        navigate(props.href ?? '/');
      }}
      onMouseOver={(event: any) => props.onMouseOver?.()}
      {...props}
    />
  );
};
