import React, { createContext, useReducer, ReactNode } from 'react';

import { getNextIndex } from '../private/getNextIndex';
import {
  Action,
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
  TAB_REGISTER_PANEL,
  TAB_DEREGISTER_PANEL,
} from './Tabs.actions';
import tabA11y from './tabA11y';
import { AllOrNone } from '../private/AllOrNone';

const sortPanels = (panels: HTMLElement[]) =>
  panels.sort((a, b) =>
    Boolean(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_PRECEDING)
      ? 1
      : -1,
  );

interface State {
  selectedIndex: number;
  focusedTabIndex: number | null;
  tabItems: Array<string | number>;
  panels: HTMLElement[];
}

interface TabsContextValues extends State {
  dispatch: (action: Action) => void;
  a11y: ReturnType<typeof tabA11y>;
  onChange?: (selectedIndex: number, selectedItem?: string) => void;
}

export const TabsContext = createContext<TabsContextValues | null>(null);

export type TabsProviderBaseProps = {
  children: ReactNode;
  id?: string;
};

export type TabsProviderStateProps = AllOrNone<{
  selectedItem?: string;
  onChange: (selectedIndex: number, selectedItem?: string) => void;
}>;

export type TabsProviderProps = TabsProviderBaseProps & TabsProviderStateProps;

export const TabsProvider = ({
  children,
  onChange,
  id = 'tabs',
  selectedItem,
}: TabsProviderProps) => {
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
          };
        }
        case TAB_REGISTER_PANEL: {
          return {
            ...state,
            panels: sortPanels([...state.panels, action.panel]),
          };
        }
        case TAB_DEREGISTER_PANEL: {
          const filterPanels = state.panels.filter(
            (panel) => panel !== action.panel,
          );

          return {
            ...state,
            panels: sortPanels(filterPanels),
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
    },
  );

  const controlledSelectedIndex = selectedItem
    ? tabsState.tabItems.indexOf(selectedItem)
    : -1;

  return (
    <TabsContext.Provider
      value={{
        ...tabsState,
        selectedIndex:
          controlledSelectedIndex > -1
            ? controlledSelectedIndex
            : tabsState.selectedIndex,
        dispatch,
        a11y: tabA11y({ uniqueId: id }),
        onChange,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};
