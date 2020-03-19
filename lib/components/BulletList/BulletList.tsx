import * as React from 'react';
import { ReactNode, createContext, useMemo } from 'react';
import { Box } from '../Box/Box';
import { UseTextProps } from '../../hooks/typography';
import { UseStackProps } from '../Stack/Stack';

const defaultSize = 'standard';
const defaultSpace = 'medium';
const defaultTone = 'neutral';
interface BulletListContextValue {
  size: NonNullable<BulletListProps['size']>;
  space: NonNullable<BulletListProps['space']>;
  tone: NonNullable<BulletListProps['tone']>;
}
export const BulletListContext = createContext<BulletListContextValue>({
  size: defaultSize,
  space: defaultSpace,
  tone: defaultTone,
});

const validTones = ['neutral', 'secondary'] as const;

export interface BulletListProps {
  children: ReactNode;
  size?: UseTextProps['size'];
  space?: UseStackProps['space'];
  tone?: typeof validTones[number];
}

export const BulletList = ({
  children,
  size = defaultSize,
  space = defaultSpace,
  tone = defaultTone,
}: BulletListProps) => {
  const bulletListContextValue = useMemo(
    () => ({
      size,
      space,
      tone,
    }),
    [size, space, tone],
  );

  if (process.env.NODE_ENV !== 'production') {
    if (!validTones.includes(tone)) {
      throw new Error(`Invalid tone: ${tone}`);
    }
  }

  return (
    <BulletListContext.Provider value={bulletListContextValue}>
      <Box component="ul">{children}</Box>
    </BulletListContext.Provider>
  );
};
