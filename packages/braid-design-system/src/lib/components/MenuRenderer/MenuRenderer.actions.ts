// Action type IDs (allows action type names to be minified)
export const actionTypes = {
  MENU_TRIGGER_UP: 0,
  MENU_ITEM_UP: 1,
  MENU_TRIGGER_DOWN: 2,
  MENU_ITEM_DOWN: 3,
  MENU_ITEM_ESCAPE: 4,
  MENU_ITEM_TAB: 5,
  MENU_ITEM_TRIGGER_KEYBOARD: 6,
  MENU_ITEM_SPACE: 7,
  MENU_ITEM_TRIGGER_CLICK: 8,
  MENU_ITEM_HOVER: 9,
  MENU_TRIGGER_KEYBOARD: 10,
  MENU_TRIGGER_CLICK: 11,
  POPOVER_CLOSE: 12,
  WINDOW_RESIZE: 13,
} as const;

export type Action =
  | { type: typeof actionTypes.MENU_TRIGGER_UP }
  | { type: typeof actionTypes.MENU_ITEM_UP }
  | { type: typeof actionTypes.MENU_TRIGGER_DOWN }
  | { type: typeof actionTypes.MENU_ITEM_DOWN }
  | { type: typeof actionTypes.MENU_ITEM_ESCAPE }
  | { type: typeof actionTypes.MENU_ITEM_TAB }
  | {
      type: typeof actionTypes.MENU_ITEM_TRIGGER_KEYBOARD;
      formElement: boolean;
      index: number;
      id?: string;
    }
  | {
      type: typeof actionTypes.MENU_ITEM_SPACE;
      formElement: boolean;
      index: number;
      id?: string;
    }
  | {
      type: typeof actionTypes.MENU_ITEM_TRIGGER_CLICK;
      formElement: boolean;
      index: number;
      id?: string;
    }
  | { type: typeof actionTypes.MENU_ITEM_HOVER; value: number }
  | { type: typeof actionTypes.MENU_TRIGGER_KEYBOARD }
  | { type: typeof actionTypes.MENU_TRIGGER_CLICK }
  | { type: typeof actionTypes.POPOVER_CLOSE }
  | { type: typeof actionTypes.WINDOW_RESIZE };
