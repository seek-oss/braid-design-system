import React, { createContext, useReducer, ReactNode } from 'react';

import { getNextIndex } from '../private/getNextIndex';
import { actionTypes, Action } from './Tabs.actions';
import { AllOrNone } from '../private/AllOrNone';

interface State {
  selectedTabItem: string | null;
  focusedTabIndex: number | null;
  tabItems: string[];
}

interface TabsContextValues extends State {
  dispatch: (action: Action) => void;
}

export const TabsContext = createContext<TabsContextValues | null>(null);

export type TabsProviderBaseProps = {
  children: ReactNode;
};

export type TabsProviderStateProps = AllOrNone<{
  selectedItem?: string;
  onChange: (selectedItem: string) => void;
}>;

export type TabsProviderProps = TabsProviderBaseProps & TabsProviderStateProps;

const {
  TAB_BUTTON_LEFT,
  TAB_BUTTON_RIGHT,
  TAB_BUTTON_DOWN,
  TAB_BUTTON_UP,
  TAB_BUTTON_HOME,
  TAB_BUTTON_END,
  TAB_BUTTON_ENTER,
  TAB_BUTTON_SPACE,
  TAB_BUTTON_TAB,
  TAB_BUTTON_CLICK,
  TAB_LIST_UPDATED,
  TAB_LIST_FOCUSED,
} = actionTypes;

export const TabsProvider = ({
  children,
  onChange,
  selectedItem,
}: TabsProviderProps) => {
  const [tabsState, dispatch] = useReducer(
    (state: State, action: Action): State => {
      switch (action.type) {
        case TAB_BUTTON_UP:
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
        case TAB_BUTTON_DOWN:
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
          if (typeof onChange === 'function') {
            onChange(action.item);
          }

          return {
            ...state,
            focusedTabIndex: action.value,
            selectedTabItem: action.item,
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
            selectedTabItem: selectedItem ? selectedItem : action.tabItems[0],
          };
        }
        default:
          return state;
      }
    },
    {
      selectedTabItem: null,
      focusedTabIndex: null,
      tabItems: [],
    },
  );

  return (
    <TabsContext.Provider
      value={{
        ...tabsState,
        selectedTabItem: selectedItem ?? tabsState.selectedTabItem,
        dispatch,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};
