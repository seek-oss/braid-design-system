import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { useTheme } from 'sku/react-treat';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import Toast from './Toast';
export var screenshots = {
  screenshotWidths: [320, 768],
  examples: [{
    label: 'Critical toast',
    Example: function Example() {
      const treatTheme = useTheme();

      const _useBraidTheme = useBraidTheme(),
          vanillaTheme = _useBraidTheme.vanillaTheme;

      return /* #__PURE__*/_jsx(Toast, {
        tone: "critical",
        message: "Critical toast",
        treatTheme,
        vanillaTheme,
        onClear: function onClear() {},
        id: "n/a",
        dedupeKey: "n/a",
        shouldRemove: false
      });
    }
  }, {
    label: 'Critical toast w/actions',
    Example: function Example() {
      const treatTheme = useTheme();

      const _useBraidTheme2 = useBraidTheme(),
          vanillaTheme = _useBraidTheme2.vanillaTheme;

      return /* #__PURE__*/_jsx(Toast, {
        tone: "critical",
        message: "Critical toast w/action",
        action: {
          label: 'Do the action',
          onClick: function onClick() {}
        },
        treatTheme,
        vanillaTheme,
        onClear: function onClear() {},
        id: "n/a",
        dedupeKey: "n/a",
        shouldRemove: false
      });
    }
  }, {
    label: 'Critical toast w/descriptions',
    Example: function Example() {
      const treatTheme = useTheme();

      const _useBraidTheme3 = useBraidTheme(),
          vanillaTheme = _useBraidTheme3.vanillaTheme;

      return /* #__PURE__*/_jsx(Toast, {
        tone: "critical",
        message: "Critical toast",
        description: "A really long description about toast stuff that is quite long and stuff",
        action: {
          label: 'Action',
          onClick: function onClick() {}
        },
        treatTheme,
        vanillaTheme,
        onClear: function onClear() {},
        id: "n/a",
        dedupeKey: "n/a",
        shouldRemove: false
      });
    }
  }, {
    label: 'Positive toast',
    Example: function Example() {
      const treatTheme = useTheme();

      const _useBraidTheme4 = useBraidTheme(),
          vanillaTheme = _useBraidTheme4.vanillaTheme;

      return /* #__PURE__*/_jsx(Toast, {
        tone: "positive",
        message: "Positive toast",
        treatTheme,
        vanillaTheme,
        onClear: function onClear() {},
        id: "n/a",
        dedupeKey: "n/a",
        shouldRemove: false
      });
    }
  }, {
    label: 'Positive toast w/actions',
    Example: function Example() {
      const treatTheme = useTheme();

      const _useBraidTheme5 = useBraidTheme(),
          vanillaTheme = _useBraidTheme5.vanillaTheme;

      return /* #__PURE__*/_jsx(Toast, {
        tone: "positive",
        message: "Positive toast w/actions",
        action: {
          label: 'Do the action',
          onClick: function onClick() {}
        },
        treatTheme,
        vanillaTheme,
        onClear: function onClear() {},
        id: "n/a",
        dedupeKey: "n/a",
        shouldRemove: false
      });
    }
  }, {
    label: 'Positive toast w/descriptions',
    Example: function Example() {
      const treatTheme = useTheme();

      const _useBraidTheme6 = useBraidTheme(),
          vanillaTheme = _useBraidTheme6.vanillaTheme;

      return /* #__PURE__*/_jsx(Toast, {
        tone: "positive",
        message: "Positive toast",
        description: "A really long description about toast stuff that is quite long and stuff",
        action: {
          label: 'Action',
          onClick: function onClick() {}
        },
        treatTheme,
        vanillaTheme,
        onClear: function onClear() {},
        id: "n/a",
        dedupeKey: "n/a",
        shouldRemove: false
      });
    }
  }]
};