import { ResponsiveValue, responsiveValue } from './../atoms/atoms.css';

export type Align = 'left' | 'center' | 'right';
export type AlignY = 'top' | 'center' | 'bottom';

const alignToFlexAlignLookup = {
  left: 'flexStart',
  center: 'center',
  right: 'flexEnd',
} as const;

export const alignToFlexAlign = (align: ResponsiveValue<Align> | undefined) =>
  align
    ? responsiveValue.map(align, (value) => alignToFlexAlignLookup[value])
    : undefined;

const alignYToFlexAlignLookup = {
  top: 'flexStart',
  center: 'center',
  bottom: 'flexEnd',
} as const;

export const alignYToFlexAlign = (
  alignY: ResponsiveValue<AlignY> | undefined,
) =>
  alignY
    ? responsiveValue.map(alignY, (value) => alignYToFlexAlignLookup[value])
    : undefined;
