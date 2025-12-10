import dedent from 'dedent';
import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconListSvg } from './IconListSvg';

export type IconListProps = IconContainerProps;

/** @deprecated  Use `IconBulletList` instead */
export const IconList: FC<IconListProps> = (props) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(
      dedent`
        The \`IconList\` component is deprecated. Please use \`IconBulletList\` instead.
            %c-<IconList />
            %c+<IconBulletList />
        %c
      `,
      'color: red',
      'color: green',
      'color: inherit',
    );
  }

  return (
    <IconContainer {...props}>
      {(svgProps) => <Box component={IconListSvg} {...svgProps} />}
    </IconContainer>
  );
};
