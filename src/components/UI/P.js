import styled from 'styled-components';

import { theme } from '../../constants';

export const P = styled.div`
  font-family: 'montserrat';
  font-size: ${({ fontSize }) => theme.spacing[fontSize] || theme.spacing[4]};
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  color: ${({ color }) => theme.colors[color] || theme.colors.grayDark};
  margin-bottom: ${({ mb }) => theme.spacing[mb] || '0'};
  margin-top: ${({ mt }) => theme.spacing[mt] || '0'};
  margin-left: ${({ ml }) => theme.spacing[ml] || '0'};
  margin-right: ${({ mr }) => theme.spacing[mr] || '0'};
  padding-bottom: ${({ pb }) => theme.spacing[pb] || '0'};
  padding-top: ${({ pt }) => theme.spacing[pt] || '0'};
  padding-right: ${({ pr }) => theme.spacing[pr] || '0'};
  padding-left: ${({ pl }) => theme.spacing[pl] || '0'};
`;
