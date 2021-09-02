// Action type IDs (allows action type names to be minified)
export const TAB_BUTTON_RIGHT = 0;
export const TAB_BUTTON_LEFT = 1;
export const TAB_BUTTON_HOME = 2;
export const TAB_BUTTON_END = 3;
export const TAB_BUTTON_TAB = 4;
export const TAB_BUTTON_ENTER = 5;
export const TAB_BUTTON_SPACE = 6;
export const TAB_BUTTON_CLICK = 7;
export const TAB_LIST_UPDATED = 8;
export const TAB_LIST_FOCUSED = 9;
export const TAB_PANELS_UPDATED = 10;

export type Action =
  | { type: typeof TAB_BUTTON_RIGHT }
  | { type: typeof TAB_BUTTON_LEFT }
  | { type: typeof TAB_BUTTON_HOME }
  | { type: typeof TAB_BUTTON_END }
  | { type: typeof TAB_BUTTON_TAB }
  | { type: typeof TAB_BUTTON_ENTER; value: number }
  | { type: typeof TAB_BUTTON_SPACE; value: number }
  | { type: typeof TAB_BUTTON_CLICK; value: number }
  | { type: typeof TAB_LIST_UPDATED; tabItems: Array<string | number> }
  | { type: typeof TAB_LIST_FOCUSED; value: number }
  | { type: typeof TAB_PANELS_UPDATED; panels: Array<number> };
