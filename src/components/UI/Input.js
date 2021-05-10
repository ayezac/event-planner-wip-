import styled from 'styled-components';

import { theme } from '../../constants';

export const Input = styled.input`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || '20px'};
  font-family: 'montserrat';
  font-size: ${({ fontSize }) => theme.spacing[fontSize] || theme.spacing[4]};
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  color: ${({ color }) => theme.colors[color] || theme.colors.grayDark};
  margin-bottom: ${({ mb }) => theme.spacing[mb] || '0'};
  margin-top: ${({ mt }) => theme.spacing[mt] || '0'};
  margin-left: ${({ ml }) => theme.spacing[ml] || '0'};
  margin-right: ${({ mr }) => theme.spacing[mr] || '0'};
  padding-bottom: ${({ pb }) => theme.spacing[pb] || '1rem'};
  padding-top: ${({ pt }) => theme.spacing[pt] || '1rem'};
  padding-right: ${({ pr }) => theme.spacing[pr] || '1rem'};
  padding-left: ${({ pl }) => theme.spacing[pl] || '1rem'};
  background-color: ${({ backgroundColor }) => theme.colors[backgroundColor] || theme.colors.white};
  border-radius: ${({ borderRadius }) => theme.spacing[borderRadius] || '10px'};
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${theme.colors[borderColor]}` : `1px solid ${theme.colors.grayDark}`};
`;
