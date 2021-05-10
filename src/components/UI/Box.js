import styled from 'styled-components';

import { theme } from '../../constants';

export const Box = styled.div`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  overflow: auto;
  display: ${({ display }) => display || 'block'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
  flex: ${({ flex }) => flex || null};
  margin-bottom: ${({ mb }) => theme.spacing[mb] || '0'};
  margin-top: ${({ mt }) => theme.spacing[mt] || '0'};
  margin-left: ${({ ml }) => theme.spacing[ml] || '0'};
  margin-right: ${({ mr }) => theme.spacing[mr] || '0'};
  padding-bottom: ${({ pb }) => theme.spacing[pb] || '1rem'};
  padding-top: ${({ pt }) => theme.spacing[pt] || '1rem'};
  padding-right: ${({ pr }) => theme.spacing[pr] || '1rem'};
  padding-left: ${({ pl }) => theme.spacing[pl] || '1rem'};
  background-color: ${({ backgroundColor }) => theme.colors[backgroundColor] || 'transparent'};
  border-radius: ${({ borderRadius }) => theme.spacing[borderRadius] || '0'};
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${theme.colors[borderColor]}` : `1px solid none`};
`;
