export declare function contrast(color1: string, color2: string): number;
export declare function findClosestAccessibleLighterColor(inputColor: string, fixedColor: string, contrastRatio?: number): string;
export declare function findClosestAccessibleDarkerColor(inputColor: string, fixedColor: string, contrastRatio?: number): string;
export declare function getLightVariant(color: string): string;
export declare function getAccessibleVariant(color: string, type: 'text' | 'graphic'): string;
