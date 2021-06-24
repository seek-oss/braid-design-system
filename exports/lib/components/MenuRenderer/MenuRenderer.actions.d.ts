export declare const actionTypes: {
  readonly MENU_TRIGGER_UP: 0;
  readonly MENU_ITEM_UP: 1;
  readonly MENU_TRIGGER_DOWN: 2;
  readonly MENU_ITEM_DOWN: 3;
  readonly MENU_ITEM_ESCAPE: 4;
  readonly MENU_ITEM_TAB: 5;
  readonly MENU_ITEM_ENTER: 6;
  readonly MENU_ITEM_SPACE: 7;
  readonly MENU_ITEM_CLICK: 8;
  readonly MENU_ITEM_HOVER: 9;
  readonly MENU_TRIGGER_ENTER: 10;
  readonly MENU_TRIGGER_SPACE: 11;
  readonly MENU_TRIGGER_CLICK: 12;
  readonly MENU_TRIGGER_TAB: 13;
  readonly MENU_TRIGGER_ESCAPE: 14;
  readonly BACKDROP_CLICK: 15;
  readonly MENU_MOUSE_LEAVE: 16;
};
export declare type Action =
  | {
      type: typeof actionTypes.MENU_TRIGGER_UP;
    }
  | {
      type: typeof actionTypes.MENU_ITEM_UP;
    }
  | {
      type: typeof actionTypes.MENU_TRIGGER_DOWN;
    }
  | {
      type: typeof actionTypes.MENU_ITEM_DOWN;
    }
  | {
      type: typeof actionTypes.MENU_ITEM_ESCAPE;
    }
  | {
      type: typeof actionTypes.MENU_ITEM_TAB;
    }
  | {
      type: typeof actionTypes.MENU_ITEM_ENTER;
      formElement: boolean;
    }
  | {
      type: typeof actionTypes.MENU_ITEM_SPACE;
      formElement: boolean;
    }
  | {
      type: typeof actionTypes.MENU_ITEM_CLICK;
      formElement: boolean;
    }
  | {
      type: typeof actionTypes.MENU_ITEM_HOVER;
      value: number;
    }
  | {
      type: typeof actionTypes.MENU_TRIGGER_ENTER;
    }
  | {
      type: typeof actionTypes.MENU_TRIGGER_SPACE;
    }
  | {
      type: typeof actionTypes.MENU_TRIGGER_CLICK;
    }
  | {
      type: typeof actionTypes.MENU_TRIGGER_TAB;
    }
  | {
      type: typeof actionTypes.MENU_TRIGGER_ESCAPE;
    }
  | {
      type: typeof actionTypes.BACKDROP_CLICK;
    }
  | {
      type: typeof actionTypes.MENU_MOUSE_LEAVE;
    };
