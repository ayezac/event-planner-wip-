import styled from 'styled-components';

import { theme } from '../../constants';

export const Image = styled.img`
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  max-height: ${({ maxHeight }) => maxHeight || '100%'};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  margin-bottom: ${({ mb }) => theme.spacing[mb] || '0'};
  margin-top: ${({ mt }) => theme.spacing[mt] || '0'};
  margin-left: ${({ ml }) => theme.spacing[ml] || '0'};
  margin-right: ${({ mr }) => theme.spacing[mr] || '0'};
  padding-bottom: ${({ pb }) => theme.spacing[pb] || '0'};
  padding-top: ${({ pt }) => theme.spacing[pt] || '0'};
  padding-right: ${({ pr }) => theme.spacing[pr] || '0'};
  padding-left: ${({ pl }) => theme.spacing[pl] || '0'};
  border-radius: ${({ borderRadius }) => theme.spacing[borderRadius] || '0'};
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${theme.colors[borderColor]}` : `1px solid none`};
`;
