import React, {
  useContext,
  useEffect,
  Fragment,
  Children,
  createContext,
  ReactElement,
} from 'react';
import assert from 'assert';
import { TabsContext } from './TabsProvider';
import { TAB_PANELS_UPDATED } from './Tabs.actions';
import { TabPanel, TabPanelProps } from './TabPanel';

interface TabPanelsContextValues {
  renderInactive: boolean;
  panelIndex: number;
}
export const TabPanelsContext = createContext<TabPanelsContextValues | null>(
  null,
);

interface TabPanelsProps {
  renderInactivePanels?: boolean;
  children: ReactElement<TabPanelProps>[];
}

export const TabPanels = ({
  renderInactivePanels = false,
  children,
}: TabPanelsProps) => {
  const tabsContext = useContext(TabsContext);

  if (!tabsContext) {
    throw new Error('TabPanels rendered outside TabsProvider context');
  }

  const { dispatch } = tabsContext;
  const panelItems: Array<number> = [];

  const panels = Children.map(children, (panel, index) => {
    assert(
      typeof panel === 'object' && panel.type === TabPanel,
      'Only TabPanel elements can be direct children of a TabPanels',
    );

    panelItems.push(index);

    return (
      <TabPanelsContext.Provider
        key={index}
        value={{
          renderInactive: renderInactivePanels,
          panelIndex: index,
        }}
      >
        {panel}
      </TabPanelsContext.Provider>
    );
  });

  useEffect(() => {
    dispatch({ type: TAB_PANELS_UPDATED, panels: panelItems });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panelItems.join(), dispatch]);

  return <Fragment>{panels}</Fragment>;
};
