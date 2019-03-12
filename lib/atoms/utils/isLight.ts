import { getLuminance } from 'polished';

export default (color: string) => getLuminance(color) > 0.6;
