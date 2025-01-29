import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconEditSvg } from './IconEditSvg';

export type IconEditProps = IconContainerProps;

export const IconEdit = (props: IconEditProps) => (
  <IconContainer
    {...props}
    verticalCorrection={{
      uppercase: 'none',
      lowercase: 'up',
    }}
  >
    {(svgProps) => <Box component={IconEditSvg} {...svgProps} />}
  </IconContainer>
);
