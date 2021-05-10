import styled from 'styled-components';

import { theme } from '../../constants';

export const SlideInPortal = styled.div`
  padding: ${theme.spacing[4]};
  background-color: ${({ backgroundColor }) => theme.colors[backgroundColor] || 'white'};
  border-radius: ${({ borderRadius }) => theme.spacing[borderRadius] || '0'};
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${theme.colors[borderColor]}` : `1px solid none`};
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.1);
  transform: translateX(calc(100% + 500px));
  transition: all 0.2s linear;
  overflow: auto;
  z-index: 100;
  width: 50%;

  ${({ isOpen }) => isOpen && `transform: translateX(0);`};
`;
