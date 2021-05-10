import styled from 'styled-components';

import { theme } from '../../constants';

export const Page = styled.div`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100vh'};
  display: ${({ display }) => display || 'block'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  margin: ${({ m }) => theme.spacing[m] || '0'};
  padding: ${({ p }) => theme.spacing[p] || '0'};
  background-color: ${({ backgroundColor }) =>
    theme.colors[backgroundColor] || theme.colors.grayLighter};
`;
