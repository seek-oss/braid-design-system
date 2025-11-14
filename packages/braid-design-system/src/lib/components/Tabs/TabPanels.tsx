import { useContext, useEffect, Fragment } from 'react';
import assert from 'tiny-invariant';

import flattenChildren from '../../utils/flattenChildren';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';

import { TabPanelsContext } from './TabPanelsContext';
import { TAB_PANELS_UPDATED } from './Tabs.actions';
import { TabsContext } from './TabsProvider';

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
  const panelItems: number[] = [];

  const panels = flattenChildren(children).map((panel, index) => {
    assert(
      // @ts-expect-error
      typeof panel === 'object' && panel.type.__isTabPanel__,
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
