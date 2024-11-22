// Action type IDs (allows action type names to be minified)
export const actionTypes = {
  CLIENT_ENVIRONMENT: 0,
  MENU_TRIGGER_UP: 1,
  MENU_ITEM_UP: 2,
  MENU_TRIGGER_DOWN: 3,
  MENU_ITEM_DOWN: 4,
  MENU_ITEM_ESCAPE: 5,
  MENU_ITEM_TAB: 6,
  MENU_ITEM_ENTER: 7,
  MENU_ITEM_SPACE: 8,
  MENU_ITEM_CLICK: 9,
  MENU_ITEM_HOVER: 10,
  MENU_TRIGGER_ENTER: 11,
  MENU_TRIGGER_SPACE: 12,
  MENU_TRIGGER_CLICK: 13,
  MENU_TRIGGER_TAB: 14,
  MENU_TRIGGER_ESCAPE: 15,
  BACKDROP_CLICK: 16,
  WINDOW_RESIZE: 17,
} as const;

export type Action =
  | { type: typeof actionTypes.CLIENT_ENVIRONMENT }
  | { type: typeof actionTypes.MENU_TRIGGER_UP }
  | { type: typeof actionTypes.MENU_ITEM_UP }
  | { type: typeof actionTypes.MENU_TRIGGER_DOWN }
  | { type: typeof actionTypes.MENU_ITEM_DOWN }
  | { type: typeof actionTypes.MENU_ITEM_ESCAPE }
  | { type: typeof actionTypes.MENU_ITEM_TAB }
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
  | { type: typeof actionTypes.BACKDROP_CLICK }
  | { type: typeof actionTypes.WINDOW_RESIZE };
