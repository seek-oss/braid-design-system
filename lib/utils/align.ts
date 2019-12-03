import { ResponsiveProp, mapResponsiveProp } from './responsiveProp';

export type Align = 'left' | 'center' | 'right';
export type AlignY = 'top' | 'center' | 'bottom';

export const alignToFlexAlign = (align: ResponsiveProp<Align> | undefined) =>
  mapResponsiveProp(align, {
    left: 'flexStart',
    center: 'center',
    right: 'flexEnd',
  });

export const alignYToFlexAlign = (alignY: ResponsiveProp<AlignY> | undefined) =>
  mapResponsiveProp(alignY, {
    top: 'flexStart',
    center: 'center',
    bottom: 'flexEnd',
  });
