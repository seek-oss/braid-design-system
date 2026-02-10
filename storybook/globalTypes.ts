/**
 * Shared global types for Storybook, used across toolbar controls and Chromatic test modes.
 */

export const colourModes = ['light', 'dark'] as const;
export type ColourMode = (typeof colourModes)[number];
export const defaultColourMode: ColourMode = 'light';

export interface StorybookGlobals {
  theme: string;
  colourMode: ColourMode;
}
