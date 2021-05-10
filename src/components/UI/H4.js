import styled from 'styled-components';

import { theme } from '../../constants';

export const H4 = styled.h4`
  font-family: 'poppins';
  font-size: ${({ fontSize }) => theme.spacing[fontSize] || theme.spacing[5]};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  color: ${({ color }) => theme.colors[color] || theme.colors.primary};
  margin-bottom: ${({ mb }) => theme.spacing[mb] || '0'};
  margin-top: ${({ mt }) => theme.spacing[mt] || '0'};
  margin-left: ${({ ml }) => theme.spacing[ml] || '0'};
  margin-right: ${({ mr }) => theme.spacing[mr] || '0'};
  padding-bottom: ${({ pb }) => theme.spacing[pb] || '0'};
  padding-top: ${({ pt }) => theme.spacing[pt] || '0'};
  padding-right: ${({ pr }) => theme.spacing[pr] || '0'};
  padding-left: ${({ pl }) => theme.spacing[pl] || '0'};
`;
