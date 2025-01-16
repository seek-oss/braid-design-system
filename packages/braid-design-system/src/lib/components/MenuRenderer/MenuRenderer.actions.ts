// Action type IDs (allows action type names to be minified)
export const actionTypes = {
  MENU_TRIGGER_UP: 0,
  MENU_ITEM_UP: 1,
  MENU_TRIGGER_DOWN: 2,
  MENU_ITEM_DOWN: 3,
  MENU_ITEM_ENTER: 4,
  MENU_ITEM_SPACE: 5,
  MENU_ITEM_CLICK: 6,
  MENU_ITEM_HOVER: 7,
  MENU_TRIGGER_ENTER: 8,
  MENU_TRIGGER_SPACE: 9,
  MENU_TRIGGER_CLICK: 10,
  MENU_TRIGGER_TAB: 11,
  MENU_TRIGGER_ESCAPE: 12,
  MENU_CLOSE: 13,
} as const;

export type Action =
  | { type: typeof actionTypes.MENU_TRIGGER_UP }
  | { type: typeof actionTypes.MENU_ITEM_UP }
  | { type: typeof actionTypes.MENU_TRIGGER_DOWN }
  | { type: typeof actionTypes.MENU_ITEM_DOWN }
  | {
      type: typeof actionTypes.MENU_ITEM_ENTER;
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
      type: typeof actionTypes.MENU_ITEM_CLICK;
      formElement: boolean;
      index: number;
      id?: string;
    }
  | { type: typeof actionTypes.MENU_ITEM_HOVER; value: number }
  | { type: typeof actionTypes.MENU_TRIGGER_ENTER }
  | { type: typeof actionTypes.MENU_TRIGGER_SPACE }
  | { type: typeof actionTypes.MENU_TRIGGER_CLICK }
  | { type: typeof actionTypes.MENU_TRIGGER_TAB }
  | { type: typeof actionTypes.MENU_TRIGGER_ESCAPE }
  | { type: typeof actionTypes.MENU_CLOSE };
