import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["id"],
    _excluded2 = ["label"];
import React from 'react';
import { useFallbackId } from '../../playroom/utils';
import { TabsProvider as BraidTabsProvider } from './TabsProvider';
import { Tabs as BraidTabs } from './Tabs';
export var TabsProvider = function TabsProvider(_ref) {
  var id = _ref.id,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var fallbackId = useFallbackId();
  return /*#__PURE__*/React.createElement(BraidTabsProvider, _extends({
    id: id !== null && id !== void 0 ? id : fallbackId
  }, restProps));
};
TabsProvider.displayName = "TabsProvider";
export var Tabs = function Tabs(_ref2) {
  var label = _ref2.label,
      restProps = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(BraidTabs, _extends({
    label: ""
  }, restProps));
};
Tabs.displayName = "Tabs";