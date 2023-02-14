import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';

interface LinkTabProps {
  label?: string;
  href?: string;
  onMouseOver?: () => void;
  onClick?: (target: HTMLDivElement) => void;
}

export const LinkTab = (props: LinkTabProps) => {
  const navigate = useNavigate();

  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (props.href?.indexOf('#') === -1) {
          event.preventDefault();
          navigate(props.href ?? '/');
        }
        props.onClick?.(event?.currentTarget as unknown as HTMLDivElement);
      }}
      onMouseOver={() => props.onMouseOver?.()}
      label={props.label}
      href={props.href}
    />
  );
};
