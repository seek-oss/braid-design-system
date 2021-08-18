import React, { useContext, useEffect, Fragment, Children } from 'react';
import assert from 'assert';
import flattenChildren from 'react-keyed-flatten-children';
import { TabsContext } from './TabsProvider';
import { TAB_PANELS_UPDATED } from './Tabs.actions';
import { TabPanel } from './TabPanel';
import { TabPanelsContext } from './TabPanelsContext';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';

interface TabPanelsProps {
  renderInactivePanels?: boolean;
  children: ReactNodeNoStrings;
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

  const panels = Children.map(flattenChildren(children), (panel, index) => {
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
