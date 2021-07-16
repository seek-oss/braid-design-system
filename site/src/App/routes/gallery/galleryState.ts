import { atom } from 'recoil';
import panzoom from 'panzoom';

export const zoom = atom({
  key: 'zoom',
  default: 1,
});

export type FitToScreenDimensions = {
  x: number;
  y: number;
  scale: number;
};
export const fitToScreenDimensions = atom<FitToScreenDimensions | null>({
  key: 'fitToScreenDimensions',
  default: null,
});

export const controller = atom<ReturnType<typeof panzoom> | null>({
  key: 'controller',
  default: null,
});
