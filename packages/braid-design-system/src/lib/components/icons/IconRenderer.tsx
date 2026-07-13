import assert from 'assert';

import clsx from 'clsx';
import { type ReactElement, useContext, type FC } from 'react';

import { iconInlineSize, useIconTone } from '../../hooks/useIcon';
import HeadingContext from '../Heading/HeadingContext';
import { TextContext } from '../Text/TextContext';

interface IconRendererProps {
  tone?: Parameters<typeof useIconTone>[0]['tone'];
  children: ({ className }: { className: string }) => ReactElement | null;
}
export const IconRenderer: FC<IconRendererProps> = ({ tone, children }) => {
  const textContext = useContext(TextContext);
  const headingContext = useContext(HeadingContext);
  const toneClass = useIconTone({ tone });

  assert(
    Boolean(textContext || headingContext),
    `IconRenderer must be inside either a \`Text\` or \`Heading\` component.`,
  );

  return children({ className: clsx(toneClass, iconInlineSize()) });
};
