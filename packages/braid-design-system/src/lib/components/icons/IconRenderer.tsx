import assert from 'assert';

import clsx from 'clsx';
import { type ReactElement, useContext, type FC } from 'react';

import { atoms } from '../../css/atoms/atoms';
import HeadingContext from '../Heading/HeadingContext';
import { TextContext } from '../Text/TextContext';

import * as styles from '../../hooks/useIcon/icon.css';

type AlignY = keyof typeof styles.alignY;
interface IconStyles {
  alignY?: AlignY;
  verticalCorrection?: keyof (typeof styles.alignY)[AlignY];
}
export const iconInlineSize = ({
  alignY = 'uppercase',
  verticalCorrection = 'none',
}: IconStyles = {}) =>
  clsx(
    atoms({
      display: 'inlineBlock',
      position: 'relative',
    }),
    styles.size,
    styles.inlineCrop,
    styles.inline,
    styles.alignY[alignY][verticalCorrection],
  );

interface IconRendererProps {
  children: ({ className }: { className: string }) => ReactElement | null;
}
export const IconRenderer: FC<IconRendererProps> = ({ children }) => {
  const textContext = useContext(TextContext);
  const headingContext = useContext(HeadingContext);

  assert(
    Boolean(textContext || headingContext),
    `IconRenderer must be inside either a \`Text\` or \`Heading\` component.`,
  );

  return children({ className: iconInlineSize() });
};
