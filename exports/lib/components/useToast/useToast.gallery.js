import _jsx from "@babel/runtime/helpers/jsx";

let _IconPromote;

import React from 'react';
import { useTheme } from 'sku/react-treat';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import { Button, IconPromote, Inline } from '..';
import Toast from './Toast';
import source from '../../utils/source.macro';
export var galleryItems = [{
  label: 'With a positive message',
  Example: function Example(_ref) {
    const id = _ref.id,
        handler = _ref.handler,
        showToast = _ref.showToast;
    const theme = useTheme();

    const _useBraidTheme = useBraidTheme(),
        vanillaTheme = _useBraidTheme.vanillaTheme;

    const _source = source( /* #__PURE__*/_jsx(Inline, {
      space: "small"
    }, void 0, /* #__PURE__*/_jsx(Button, {
      onClick: function onClick() {
        return showToast({
          message: 'Positive message',
          tone: 'positive'
        });
      }
    }, void 0, "Show Toast"))),
        code = _source.code;

    return {
      code,
      value: /* #__PURE__*/_jsx(Inline, {
        space: "gutter",
        align: "center"
      }, void 0, /* #__PURE__*/_jsx(Toast, {
        id,
        dedupeKey: id,
        shouldRemove: false,
        treatTheme: theme,
        vanillaTheme,
        onClear: handler,
        message: "Positive message",
        tone: "positive"
      }))
    };
  }
}, {
  label: 'With a critical message',
  Example: function Example(_ref2) {
    const id = _ref2.id,
        handler = _ref2.handler,
        showToast = _ref2.showToast;
    const theme = useTheme();

    const _useBraidTheme2 = useBraidTheme(),
        vanillaTheme = _useBraidTheme2.vanillaTheme;

    const _source2 = source( /* #__PURE__*/_jsx(Inline, {
      space: "small"
    }, void 0, /* #__PURE__*/_jsx(Button, {
      onClick: function onClick() {
        return showToast({
          message: 'Critical message',
          tone: 'critical'
        });
      }
    }, void 0, "Show Toast"))),
        code = _source2.code;

    return {
      code,
      value: /* #__PURE__*/_jsx(Inline, {
        space: "gutter",
        align: "center"
      }, void 0, /* #__PURE__*/_jsx(Toast, {
        id,
        dedupeKey: id,
        shouldRemove: false,
        treatTheme: theme,
        vanillaTheme,
        onClear: handler,
        message: "Critical message",
        tone: "critical"
      }))
    };
  }
}, {
  label: 'With a description',
  Example: function Example(_ref3) {
    const id = _ref3.id,
        handler = _ref3.handler,
        showToast = _ref3.showToast;
    const theme = useTheme();

    const _useBraidTheme3 = useBraidTheme(),
        vanillaTheme = _useBraidTheme3.vanillaTheme;

    const _source3 = source( /* #__PURE__*/_jsx(Inline, {
      space: "small"
    }, void 0, /* #__PURE__*/_jsx(Button, {
      onClick: function onClick() {
        return showToast({
          message: 'Toast message',
          tone: 'positive',
          description: 'With a longer piece of text describing what has occured.'
        });
      }
    }, void 0, "Show Toast"))),
        code = _source3.code;

    return {
      code,
      value: /* #__PURE__*/_jsx(Toast, {
        id,
        dedupeKey: id,
        shouldRemove: false,
        treatTheme: theme,
        vanillaTheme,
        onClear: handler,
        message: "Toast message",
        tone: "positive",
        description: "With a longer piece of text describing what has occured."
      })
    };
  }
}, {
  label: 'With an action',
  Example: function Example(_ref4) {
    const id = _ref4.id,
        handler = _ref4.handler,
        showToast = _ref4.showToast;
    const theme = useTheme();

    const _useBraidTheme4 = useBraidTheme(),
        vanillaTheme = _useBraidTheme4.vanillaTheme;

    const _source4 = source( /* #__PURE__*/_jsx(Inline, {
      space: "small"
    }, void 0, /* #__PURE__*/_jsx(Button, {
      onClick: function onClick() {
        return showToast({
          message: 'Toast message',
          tone: 'critical',
          action: {
            label: 'Action',
            onClick: function onClick() {}
          }
        });
      }
    }, void 0, "Show Toast"))),
        code = _source4.code;

    return {
      code,
      value: /* #__PURE__*/_jsx(Toast, {
        id,
        dedupeKey: id,
        shouldRemove: false,
        treatTheme: theme,
        vanillaTheme,
        onClear: handler,
        message: "Toast message",
        tone: "critical",
        action: {
          label: 'Action',
          onClick: handler
        }
      })
    };
  }
}, {
  label: 'With an action and description',
  Example: function Example(_ref5) {
    const id = _ref5.id,
        handler = _ref5.handler,
        showToast = _ref5.showToast;
    const theme = useTheme();

    const _useBraidTheme5 = useBraidTheme(),
        vanillaTheme = _useBraidTheme5.vanillaTheme;

    const _source5 = source( /* #__PURE__*/_jsx(Inline, {
      space: "small"
    }, void 0, /* #__PURE__*/_jsx(Button, {
      onClick: function onClick() {
        return showToast({
          message: 'Toast message',
          tone: 'positive',
          description: 'With a longer piece of text describing what has occured.',
          action: {
            label: 'Action',
            onClick: function onClick() {}
          }
        });
      }
    }, void 0, "Show Toast"))),
        code = _source5.code;

    return {
      code,
      value: /* #__PURE__*/_jsx(Toast, {
        id,
        dedupeKey: id,
        shouldRemove: false,
        treatTheme: theme,
        vanillaTheme,
        onClear: handler,
        message: "Toast message",
        tone: "positive",
        description: "With a longer piece of text describing what has occured.",
        action: {
          label: 'Action',
          onClick: handler
        }
      })
    };
  }
}, {
  label: 'Preview animation',
  Example: function Example(_ref6) {
    const showToast = _ref6.showToast;
    return source( /* #__PURE__*/_jsx(Inline, {
      space: "small",
      align: "center"
    }, void 0, /* #__PURE__*/_jsx(Button, {
      onClick: function onClick() {
        return showToast({
          message: 'Toast message',
          tone: 'critical',
          description: 'With a longer piece of text describing what has occured.',
          action: {
            label: 'Action',
            onClick: function onClick() {}
          }
        });
      }
    }, void 0, "Show animation ", _IconPromote || (_IconPromote = /* #__PURE__*/_jsx(IconPromote, {
      alignY: "lowercase"
    })))));
  }
}];