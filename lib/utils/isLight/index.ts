import { getLuminance } from 'polished';

export const isLight = (color: string) => getLuminance(color) > 0.6;
