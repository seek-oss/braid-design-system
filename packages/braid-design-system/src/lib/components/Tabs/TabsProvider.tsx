import { type ReactNode, createContext, useReducer, type FC } from 'react';

import { useFallbackId } from '../../hooks/useFallbackId';
import { getNextIndex } from '../private/getNextIndex';

import {
  type Action,
  TAB_BUTTON_LEFT,
  TAB_BUTTON_RIGHT,
  TAB_BUTTON_HOME,
  TAB_BUTTON_END,
  TAB_BUTTON_ENTER,
  TAB_BUTTON_SPACE,
  TAB_BUTTON_TAB,
  TAB_BUTTON_CLICK,
  TAB_LIST_UPDATED,
  TAB_LIST_FOCUSED,
  TAB_PANELS_UPDATED,
  TAB_BUTTON_REGISTER,
} from './Tabs.actions';
import tabA11y from './tabA11y';

interface State {
  selectedIndex: number;
  focusedTabIndex: number | null;
  tabItems: Array<string | number>;
  panels: number[];
  tabButtonElements: Record<string, HTMLElement>;
}

interface TabsContextValues extends State {
  selectedItem?: string;
  dispatch: (action: Action) => void;
  a11y: ReturnType<typeof tabA11y>;
  onChange?: (selectedIndex: number, selectedItem?: string) => void;
}

export const TabsContext = createContext<TabsContextValues | null>(null);

export interface TabsProviderProps {
  children: ReactNode;
  id?: string;
  selectedItem?: string;
  onChange?: (selectedIndex: number, selectedItem?: string) => void;
}

export const TabsProvider: FC<TabsProviderProps> = ({
  children,
  onChange,
  id,
  selectedItem,
}) => {
  const resolvedId = useFallbackId(id);

  const [tabsState, dispatch] = useReducer(
    (state: State, action: Action): State => {
      switch (action.type) {
        case TAB_BUTTON_LEFT: {
          return {
            ...state,
            focusedTabIndex: getNextIndex(
              -1,
              state.focusedTabIndex,
              state.tabItems.length,
            ),
          };
        }
        case TAB_BUTTON_RIGHT: {
          return {
            ...state,
            focusedTabIndex: getNextIndex(
              1,
              state.focusedTabIndex,
              state.tabItems.length,
            ),
          };
        }
        case TAB_BUTTON_HOME: {
          return {
            ...state,
            focusedTabIndex: 0,
          };
        }
        case TAB_BUTTON_END: {
          return {
            ...state,
            focusedTabIndex: state.tabItems.length - 1,
          };
        }
        case TAB_BUTTON_TAB: {
          return {
            ...state,
            focusedTabIndex: null,
          };
        }
        case TAB_BUTTON_ENTER:
        case TAB_BUTTON_SPACE:
        case TAB_BUTTON_CLICK: {
          return {
            ...state,
            focusedTabIndex: action.value,
            selectedIndex: action.value,
          };
        }
        case TAB_BUTTON_REGISTER: {
          return {
            ...state,
            tabButtonElements: {
              ...state.tabButtonElements,
              [action.tabListItemIndex.toString()]: action.tabEl,
            },
          };
        }
        case TAB_LIST_FOCUSED: {
          return {
            ...state,
            focusedTabIndex: action.value || 0,
          };
        }
        case TAB_LIST_UPDATED: {
          return {
            ...state,
            tabItems: action.tabItems,
            selectedIndex: 0,
          };
        }
        case TAB_PANELS_UPDATED: {
          return {
            ...state,
            panels: action.panels,
          };
        }

        default:
          return state;
      }
    },
    {
      selectedIndex: 0,
      focusedTabIndex: null,
      tabItems: [],
      panels: [],
      tabButtonElements: {},
    },
  );

  return (
    <TabsContext.Provider
      value={{
        ...tabsState,
        selectedIndex:
          typeof selectedItem !== 'undefined'
            ? tabsState.tabItems.indexOf(selectedItem)
            : tabsState.selectedIndex,
        selectedItem,
        dispatch,
        a11y: tabA11y({ uniqueId: resolvedId }),
        onChange,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};
