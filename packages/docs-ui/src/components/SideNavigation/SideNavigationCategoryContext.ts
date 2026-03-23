import type { Text } from 'braid-design-system';
import { createContext, type ComponentProps } from 'react';

type TextProps = ComponentProps<typeof Text>;

export const validTones = ['neutral', 'secondary'] as const;

export interface SideNavigationCategoryContextValue {
  size?: TextProps['size'];
  tone?: (typeof validTones)[number];
  weight?: TextProps['weight'];
}

export const SideNavigationCategoryContext =
  createContext<SideNavigationCategoryContextValue | null>(null);
