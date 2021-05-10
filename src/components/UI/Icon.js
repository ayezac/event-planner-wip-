import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { theme } from '../../constants';

export const Icon = styled(FontAwesomeIcon)`
  font-size: ${({ fontSize }) => theme.spacing[fontSize] || theme.spacing[4]};
  color: ${({ color }) => theme.colors[color] || theme.colors.white};
  margin-bottom: ${({ mb }) => theme.spacing[mb] || '0'};
  margin-top: ${({ mt }) => theme.spacing[mt] || '0'};
  margin-left: ${({ ml }) => theme.spacing[ml] || '0'};
  margin-right: ${({ mr }) => theme.spacing[mr] || '0'};
  padding-bottom: ${({ pb }) => theme.spacing[pb] || '0'};
  padding-top: ${({ pt }) => theme.spacing[pt] || '0'};
  padding-right: ${({ pr }) => theme.spacing[pr] || '0'};
  padding-left: ${({ pl }) => theme.spacing[pl] || '0'};
  border-radius: ${({ borderradius }) => theme.spacing[borderradius] || '0'};
  border: ${({ bordercolor }) =>
    bordercolor ? `1px solid ${theme.colors[bordercolor]}` : `1px solid none`};
`;
