// Action type IDs (allows action type names to be minified)
export const actionTypes = {
  TAB_BUTTON_RIGHT: 0,
  TAB_BUTTON_LEFT: 1,
  TAB_BUTTON_DOWN: 2,
  TAB_BUTTON_UP: 3,
  TAB_BUTTON_HOME: 4,
  TAB_BUTTON_END: 5,
  TAB_BUTTON_TAB: 6,
  TAB_BUTTON_ENTER: 7,
  TAB_BUTTON_SPACE: 8,
  TAB_BUTTON_CLICK: 9,
  TAB_LIST_UPDATED: 10,
  TAB_LIST_FOCUSED: 11,
} as const;

export type Action =
  | { type: typeof actionTypes.TAB_BUTTON_RIGHT }
  | { type: typeof actionTypes.TAB_BUTTON_LEFT }
  | { type: typeof actionTypes.TAB_BUTTON_DOWN }
  | { type: typeof actionTypes.TAB_BUTTON_UP }
  | { type: typeof actionTypes.TAB_BUTTON_HOME }
  | { type: typeof actionTypes.TAB_BUTTON_END }
  | { type: typeof actionTypes.TAB_BUTTON_TAB }
  | { type: typeof actionTypes.TAB_BUTTON_ENTER; value: number; item: string }
  | { type: typeof actionTypes.TAB_BUTTON_SPACE; value: number; item: string }
  | { type: typeof actionTypes.TAB_BUTTON_CLICK; value: number; item: string }
  | { type: typeof actionTypes.TAB_LIST_UPDATED; tabItems: string[] }
  | { type: typeof actionTypes.TAB_LIST_FOCUSED; value: number };
