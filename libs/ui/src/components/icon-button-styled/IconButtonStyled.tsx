import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import { ReactElement } from 'react';

interface IconButtonStyled {
  children: ReactElement;
  func: () => void;
}

const _IconButtonStyled = styled(IconButton)`
  color: #ffffff;
`;

export function IconButtonStyled({ children, func }: IconButtonStyled) {
  return (
    <_IconButtonStyled aria-label="logout" onClick={func}>
      {children}
    </_IconButtonStyled>
  );
}

export default IconButtonStyled;
