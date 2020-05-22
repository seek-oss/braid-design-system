import React, { createContext, useMemo } from 'react';
import assert from 'assert';
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
  assert(validTones.includes(tone), `Invalid tone: ${tone}`);

  const bulletListContextValue = useMemo(() => ({ size, tone }), [size, tone]);

  return (
    <BulletListContext.Provider value={bulletListContextValue}>
      <Stack component="ul" space={space}>
        {children}
      </Stack>
    </BulletListContext.Provider>
  );
};
