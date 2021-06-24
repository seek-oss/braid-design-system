import _jsx from "@babel/runtime/helpers/jsx";

let _IconPromote, _IconPromote2, _IconPromote3, _IconPromote4, _IconPromote5;

import React from 'react';
import { Button, Text, Stack, Inline, TextLink, Strong, IconPromote, Notice } from '..';
import { useThemeSettings } from '../../../site/src/App/ThemeSetting';
import Code from '../../../site/src/App/Code/Code';
import Toast from './Toast';
import source from '../../utils/source.macro';
import { useToast } from './ToastContext';
const docs = {
  category: 'Content',
  Example: function Example(_ref) {
    const id = _ref.id,
        handler = _ref.handler;

    const _useThemeSettings = useThemeSettings(),
        theme = _useThemeSettings.theme;

    const showToast = useToast();

    const _source = source( /* #__PURE__*/_jsx(Inline, {
      space: "large",
      align: "center"
    }, void 0, /* #__PURE__*/_jsx(Button, {
      onClick: function onClick() {
        return showToast({
          message: 'Positive toast',
          tone: 'positive'
        });
      }
    }, void 0, "Show animation ", _IconPromote || (_IconPromote = /* #__PURE__*/_jsx(IconPromote, {
      alignY: "lowercase"
    }))))),
        code = _source.code,
        value = _source.value;

    return {
      code,
      value: /* #__PURE__*/_jsx(Stack, {
        space: "large",
        align: "center"
      }, void 0, /* #__PURE__*/_jsx(Toast, {
        id,
        dedupeKey: id,
        shouldRemove: false,
        treatTheme: theme.treatTheme,
        vanillaTheme: theme.vanillaTheme,
        onClear: handler,
        message: "Positive toast",
        tone: "positive"
      }), value)
    };
  },
  accessibility: /* #__PURE__*/_jsx(Text, {}, void 0, "Follows the", ' ', /* #__PURE__*/_jsx(TextLink, {
    href: "https://www.w3.org/TR/wai-aria-practices/#alert"
  }, void 0, "WAI-ARIA Alert Pattern.")),
  alternatives: [{
    name: 'Alert',
    description: 'For in-flow messaging.'
  }, {
    name: 'Notice',
    description: 'For lighter in-flow messaging.'
  }],
  additional: [{
    label: 'Prototyping',
    description: /* #__PURE__*/_jsx(Text, {}, void 0, "The ", /* #__PURE__*/_jsx(Strong, {}, void 0, "showToast"), " function used in these examples is automatically available in Playroom.")
  }, {
    label: 'Development considerations',
    description: /* #__PURE__*/React.createElement(React.Fragment, null, /* #__PURE__*/_jsx(Text, {}, void 0, "To get access to the ", /* #__PURE__*/_jsx(Strong, {}, void 0, "showToast"), " function in your application code, call the ", /* #__PURE__*/_jsx(Strong, {}, void 0, "useToast"), " Hook."), /* #__PURE__*/_jsx(Code, {
      playroom: false
    }, void 0, "\n          import { useToast } from 'braid-design-system';\n\n          export default () => {\n            const showToast = useToast();\n\n            // etc...\n          }\n        "), /* #__PURE__*/_jsx(Text, {}, void 0, "To enable this Hook, wrap your app in a", ' ', /* #__PURE__*/_jsx(Strong, {}, void 0, "ToastProvider"), "\u2014typically where you render", ' ', /* #__PURE__*/_jsx(TextLink, {
      href: "/components/BraidProvider"
    }, void 0, "BraidProvider"), "."), /* #__PURE__*/_jsx(Code, {
      playroom: false
    }, void 0, "\n          import { BraidProvider, ToastProvider } from 'braid-design-system';\n\n          export const App = () => (\n            <BraidProvider>\n              <ToastProvider>\n                {/* App code... */}\n              </ToastProvider>\n            </BraidProvider>\n          )\n        "))
  }, {
    label: 'Tones',
    description: /* #__PURE__*/_jsx(Text, {}, void 0, "Toasts support ", /* #__PURE__*/_jsx(Strong, {}, void 0, "positive"), " and ", /* #__PURE__*/_jsx(Strong, {}, void 0, "critical"), ' ', "tones."),
    Example: function Example(_ref2) {
      const id = _ref2.id,
          showToast = _ref2.showToast,
          handler = _ref2.handler;

      const _useThemeSettings2 = useThemeSettings(),
          theme = _useThemeSettings2.theme;

      const _source2 = source( /* #__PURE__*/_jsx(Stack, {
        space: "small"
      }, void 0, /* #__PURE__*/_jsx(Inline, {
        space: "small",
        align: "center"
      }, void 0, /* #__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return showToast({
            tone: 'positive',
            message: 'Positive message'
          });
        }
      }, void 0, "Show positive toast ", _IconPromote2 || (_IconPromote2 = /* #__PURE__*/_jsx(IconPromote, {
        alignY: "lowercase"
      })))), /* #__PURE__*/_jsx(Inline, {
        space: "small",
        align: "center"
      }, void 0, /* #__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return showToast({
            tone: 'critical',
            message: 'Critical message'
          });
        }
      }, void 0, "Show critical toast ", _IconPromote3 || (_IconPromote3 = /* #__PURE__*/_jsx(IconPromote, {
        alignY: "lowercase"
      })))))),
          code = _source2.code;

      const _source3 = source( /* #__PURE__*/_jsx(Stack, {
        space: "large",
        align: "center"
      }, void 0, /* #__PURE__*/_jsx(Toast, {
        id: "".concat(id, "_1"),
        dedupeKey: "".concat(id, "_1"),
        shouldRemove: false,
        treatTheme: theme.treatTheme,
        vanillaTheme: theme.vanillaTheme,
        onClear: handler,
        message: "Positive message",
        tone: "positive"
      }), /* #__PURE__*/_jsx(Toast, {
        id: "".concat(id, "_2"),
        dedupeKey: "".concat(id, "_2"),
        shouldRemove: false,
        treatTheme: theme.treatTheme,
        vanillaTheme: theme.vanillaTheme,
        onClear: handler,
        message: "Critical message",
        tone: "critical"
      }))),
          value = _source3.value;

      return {
        code,
        value
      };
    }
  }, {
    label: 'Descriptions',
    description: /* #__PURE__*/_jsx(Text, {}, void 0, "If you need to provide more context to the user, you can also provide a description."),
    Example: function Example(_ref3) {
      const id = _ref3.id,
          showToast = _ref3.showToast,
          handler = _ref3.handler;

      const _useThemeSettings3 = useThemeSettings(),
          theme = _useThemeSettings3.theme;

      const _source4 = source( /* #__PURE__*/_jsx(Inline, {
        space: "small",
        align: "center"
      }, void 0, /* #__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return showToast({
            tone: 'positive',
            message: 'Positive message',
            description: 'Longer description providing more context for the user.'
          });
        }
      }, void 0, "Show animation ", _IconPromote4 || (_IconPromote4 = /* #__PURE__*/_jsx(IconPromote, {
        alignY: "lowercase"
      }))))),
          code = _source4.code;

      const _source5 = source( /* #__PURE__*/_jsx(Stack, {
        space: "large",
        align: "center"
      }, void 0, /* #__PURE__*/_jsx(Toast, {
        id,
        dedupeKey: id,
        shouldRemove: false,
        treatTheme: theme.treatTheme,
        vanillaTheme: theme.vanillaTheme,
        onClear: handler,
        message: "Positive message",
        tone: "positive",
        description: "Longer description providing more context for the user."
      }))),
          value = _source5.value;

      return {
        code,
        value
      };
    }
  }, {
    label: 'Actions',
    description: /* #__PURE__*/React.createElement(React.Fragment, null, /* #__PURE__*/_jsx(Text, {}, void 0, "You can allow users to perform a single associated action via the", ' ', /* #__PURE__*/_jsx(Strong, {}, void 0, "action"), " prop. When the action is performed, the toast is automatically removed from the screen."), /* #__PURE__*/_jsx(Notice, {
      tone: "info"
    }, void 0, /* #__PURE__*/_jsx(Text, {}, void 0, "Toast actions are not available to screen readers. To maintain accessibility, please ensure that these actions are either non-essential or available elsewhere in your application."))),
    Example: function Example(_ref4) {
      const id = _ref4.id,
          showToast = _ref4.showToast,
          handler = _ref4.handler;

      const _useThemeSettings4 = useThemeSettings(),
          theme = _useThemeSettings4.theme;
      /* eslint-disable no-alert */


      const _source6 = source( /* #__PURE__*/_jsx(Inline, {
        space: "small",
        align: "center"
      }, void 0, /* #__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return showToast({
            tone: 'positive',
            message: 'Positive message',
            action: {
              label: 'Undo',
              onClick: function onClick() {
                return alert('Undo!');
              }
            }
          });
        }
      }, void 0, "Show animation ", _IconPromote5 || (_IconPromote5 = /* #__PURE__*/_jsx(IconPromote, {
        alignY: "lowercase"
      }))))),
          code = _source6.code;

      const _source7 = source( /* #__PURE__*/_jsx(Stack, {
        space: "large",
        align: "center"
      }, void 0, /* #__PURE__*/_jsx(Toast, {
        id,
        dedupeKey: id,
        shouldRemove: false,
        treatTheme: theme.treatTheme,
        vanillaTheme: theme.vanillaTheme,
        onClear: handler,
        message: "Positive message",
        tone: "positive",
        action: {
          label: 'Undo',
          onClick: function onClick() {
            return alert('Undo!');
          }
        }
      }))),
          value = _source7.value;
      /* eslint-enable no-alert */


      return {
        code,
        value
      };
    }
  }, {
    label: 'Deduping',
    description: /* #__PURE__*/_jsx(Text, {}, void 0, "You can assign a ", /* #__PURE__*/_jsx(Strong, {}, void 0, "key"), " to each toast which is used to guarantee that only a single toast with a given key is visible at once. This is particularly useful for reducing visual noise when your application has the potential to generate a lot of toasts."),
    Example: function Example(_ref5) {
      const showToast = _ref5.showToast;
      return source( /* #__PURE__*/_jsx(Inline, {
        space: "small",
        align: "center"
      }, void 0, /* #__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return showToast({
            key: '1',
            tone: 'positive',
            message: 'Toast 1'
          });
        }
      }, void 0, "Toast 1"), /* #__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return showToast({
            key: '2',
            tone: 'positive',
            message: 'Toast 2'
          });
        }
      }, void 0, "Toast 2"), /* #__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return showToast({
            key: '3',
            tone: 'positive',
            message: 'Toast 3'
          });
        }
      }, void 0, "Toast 3")));
    }
  }]
};
export default docs;