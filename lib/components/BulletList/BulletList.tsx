import React, { createContext, useMemo } from 'react';
import { TextProps } from '../Text/Text';
import { Stack, StackProps } from '../Stack/Stack';

const defaultSize = 'standard';
const defaultSpace = 'medium';
const defaultTone = 'neutral';
interface BulletListContextValue {
  size: NonNullable<BulletListProps['size']>;
  tone: NonNullable<BulletListProps['tone']>;
}
export const BulletListContext = createContext<BulletListContextValue>({
  size: defaultSize,
  tone: defaultTone,
});

const validTones = ['neutral', 'secondary'] as const;

export interface BulletListProps {
  children: StackProps['children'];
  size?: TextProps['size'];
  space?: StackProps['space'];
  tone?: typeof validTones[number];
}

export const BulletList = ({
  children,
  size = defaultSize,
  space = defaultSpace,
  tone = defaultTone,
}: BulletListProps) => {
  const bulletListContextValue = useMemo(() => ({ size, tone }), [size, tone]);

  if (process.env.NODE_ENV !== 'production') {
    if (!validTones.includes(tone)) {
      throw new Error(`Invalid tone: ${tone}`);
    }
  }

  return (
    <BulletListContext.Provider value={bulletListContextValue}>
      <Stack component="ul" space={space}>
        {children}
      </Stack>
    </BulletListContext.Provider>
  );
};
