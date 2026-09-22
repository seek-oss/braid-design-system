import assert from 'assert';

import clsx from 'clsx';
import { type ReactElement, useContext, type FC } from 'react';

import { atoms } from '../../css/atoms/atoms';
import { iconInlineSize, useIconTone } from '../../hooks/useIcon';
import HeadingContext from '../Heading/HeadingContext';
import { TextContext } from '../Text/TextContext';

interface IconRendererProps {
  size?: 'fill';
  tone?: Parameters<typeof useIconTone>[0]['tone'];
  children: ({ className }: { className: string }) => ReactElement | null;
}
export const IconRenderer: FC<IconRendererProps> = ({
  children,
  size,
  tone,
}) => {
  const textContext = useContext(TextContext);
  const headingContext = useContext(HeadingContext);
  const toneClass = useIconTone({ tone });
  const isFillSize = size === 'fill';

  assert(
    isFillSize || Boolean(textContext || headingContext),
    `IconRenderer must be inside either a \`Text\` or \`Heading\` component, or provided to an \`icon\` slot.`,
  );

  return children({
    className: clsx(
      toneClass,
      isFillSize
        ? atoms({ width: 'full', height: 'full', display: 'block' })
        : iconInlineSize(),
    ),
  });
};
