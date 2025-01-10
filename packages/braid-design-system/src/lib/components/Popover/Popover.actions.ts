// Action type IDs (allows action type names to be minified)
export const actionTypes = {
  BACKDROP_CLICK: 0,
  POPOVER_TRIGGER_ESCAPE: 1,
  POPOVER_TRIGGER_TAB: 2,
  POPOVER_ESCAPE: 3,
  POPOVER_TAB: 4,
  // POPOVER_TRIGGER_DOWN: 5,
  // POPOVER_TRIGGER_ENTER: 6,
  // POPOVER_TRIGGER_SPACE: 7,
  // POPOVER_TRIGGER_CLICK: 8,
  POPOVER_OPEN: 8,
  WINDOW_RESIZE: 9,
} as const;

export type Action =
  | { type: typeof actionTypes.BACKDROP_CLICK }
  | { type: typeof actionTypes.POPOVER_TRIGGER_ESCAPE }
  | { type: typeof actionTypes.POPOVER_TRIGGER_TAB }
  | { type: typeof actionTypes.POPOVER_ESCAPE }
  | { type: typeof actionTypes.POPOVER_TAB }
  // | { type: typeof actionTypes.POPOVER_TRIGGER_DOWN }
  // | { type: typeof actionTypes.POPOVER_TRIGGER_ENTER }
  // | { type: typeof actionTypes.POPOVER_TRIGGER_SPACE }
  // | { type: typeof actionTypes.POPOVER_TRIGGER_CLICK }
  | { type: typeof actionTypes.POPOVER_OPEN }
  | { type: typeof actionTypes.WINDOW_RESIZE };
