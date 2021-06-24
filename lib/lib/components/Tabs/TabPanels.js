import _jsx from "@babel/runtime/helpers/jsx";
import _typeof from "@babel/runtime/helpers/typeof";
import React, { useContext, useEffect, Fragment, Children } from 'react';
import assert from 'assert';
import flattenChildren from 'react-keyed-flatten-children';
import { TabsContext } from './TabsProvider';
import { TAB_PANELS_UPDATED } from './Tabs.actions';
import { TabPanel } from './TabPanel';
import { TabPanelsContext } from './TabPanelsContext';
export var TabPanels = function TabPanels(_ref) {
  var _ref$renderInactivePa = _ref.renderInactivePanels,
      renderInactivePanels = _ref$renderInactivePa === void 0 ? false : _ref$renderInactivePa,
      children = _ref.children;
  var tabsContext = useContext(TabsContext);

  if (!tabsContext) {
    throw new Error('TabPanels rendered outside TabsProvider context');
  }

  var dispatch = tabsContext.dispatch;
  var panelItems = [];
  var panels = Children.map(flattenChildren(children), function (panel, index) {
    assert(_typeof(panel) === 'object' && panel.type === TabPanel, 'Only TabPanel elements can be direct children of a TabPanels');
    panelItems.push(index);
    return /*#__PURE__*/_jsx(TabPanelsContext.Provider, {
      value: {
        renderInactive: renderInactivePanels,
        panelIndex: index
      }
    }, index, panel);
  });
  useEffect(function () {
    dispatch({
      type: TAB_PANELS_UPDATED,
      panels: panelItems
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panelItems.join(), dispatch]);
  return /*#__PURE__*/_jsx(Fragment, {}, void 0, panels);
};
TabPanels.displayName = "TabPanels";