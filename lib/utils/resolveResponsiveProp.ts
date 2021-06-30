import clsx from 'clsx';
import {
  OptionalResponsiveValue,
  normalizeResponsiveValue,
} from '../css/atoms/sprinkles.css';
import { optimizeResponsiveArray } from './optimizeResponsiveArray';

export const resolveResponsiveProp = <Keys extends string | number>(
  value: OptionalResponsiveValue<Keys>,
  mobileAtoms: Record<Keys, string>,
  tabletAtoms: Record<Keys, string>,
  desktopAtoms: Record<Keys, string>,
  wideAtoms: Record<Keys, string>,
) => {
  if (typeof value === 'string' || typeof value === 'number') {
    return mobileAtoms[value!];
  }

  const normalized = normalizeResponsiveValue(value);
  const [mobile, tablet, desktop, wide] = optimizeResponsiveArray([
    normalized.mobile ?? null,
    normalized.tablet ?? null,
    normalized.desktop ?? null,
    normalized.wide ?? null,
  ]);

  const mobileAtom = mobileAtoms[mobile!];
  const tabletAtom = tabletAtoms[tablet!];
  const desktopAtom = desktopAtoms[desktop!];
  const wideAtom = wideAtoms[wide!];

  return clsx(mobileAtom, tabletAtom, desktopAtom, wideAtom);
};
