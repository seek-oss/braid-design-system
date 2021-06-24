import _jsx from "@babel/runtime/helpers/jsx";

var _Stack, _Alert, _Text, _Card;

import React from 'react';
import source from '../../utils/source.macro';
import { Alert, Text, Strong, Stack, TextLink, List } from '../';
import { Card } from '../Card/Card';
var docs = {
  category: 'Content',
  migrationGuide: true,
  Example: function Example() {
    return source(_Stack || (_Stack = /*#__PURE__*/_jsx(Stack, {
      space: "medium"
    }, void 0, /*#__PURE__*/_jsx(Alert, {
      tone: "promote"
    }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a promoted message.")), /*#__PURE__*/_jsx(Alert, {
      tone: "info"
    }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is an informative message.")), /*#__PURE__*/_jsx(Alert, {
      tone: "positive"
    }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a positive message.")), /*#__PURE__*/_jsx(Alert, {
      tone: "caution"
    }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a cautionary message.")), /*#__PURE__*/_jsx(Alert, {
      tone: "critical"
    }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a critical message.")))));
  },
  accessibility: /*#__PURE__*/_jsx(Text, {}, void 0, "Follows the", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "https://www.w3.org/TR/wai-aria-practices/#alert"
  }, void 0, "WAI-ARIA Alert Pattern"), ", announcing messages with a", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "https://www.w3.org/TR/wai-aria/#aria-live"
  }, void 0, "polite"), ' ', "level of importance."),
  alternatives: [{
    name: 'Notice',
    description: 'For a lighter visual treatment.'
  }, {
    name: 'useToast',
    description: 'For asynchronous messages that float above the page.'
  }],
  additional: [{
    label: 'Content guidelines',
    description: /*#__PURE__*/_jsx(Stack, {
      space: "large"
    }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "An Alert can contain layout components such as", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Stack"
    }, void 0, "Stack"), " and", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Inline"
    }, void 0, "Inline"), ", as well as typographic components such as", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Text"
    }, void 0, "Text"), ",", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/TextLink"
    }, void 0, "TextLink"), " and", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/List"
    }, void 0, "List"), ". We do not recommend using", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Button"
    }, void 0, "Button"), " elements inside of message."), /*#__PURE__*/_jsx(Text, {}, void 0, "This component has only been designed to use standard size text. Any other size of text will break the alignment with the icon.")),
    Example: function Example() {
      return source(_Alert || (_Alert = /*#__PURE__*/_jsx(Alert, {
        tone: "info"
      }, void 0, /*#__PURE__*/_jsx(Stack, {
        space: "large"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is an informative message with a", ' ', /*#__PURE__*/_jsx(TextLink, {
        href: "#"
      }, void 0, "TextLink.")), /*#__PURE__*/_jsx(List, {
        space: "medium"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Bullet 1"), /*#__PURE__*/_jsx(Text, {}, void 0, "Bullet 2"), /*#__PURE__*/_jsx(Text, {}, void 0, "Bullet 3"))))));
    }
  }, {
    label: 'Dismissable alerts',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "An Alert can be made dismissable by providing an", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "onClose"), " handler."),
    Example: function Example() {
      return (
        /* eslint-disable no-alert */
        source( /*#__PURE__*/_jsx(Alert, {
          tone: "info",
          onClose: function onClose() {
            return alert('Dismiss this message');
          },
          closeLabel: "Close info alert"
        }, void 0, _Text || (_Text = /*#__PURE__*/_jsx(Text, {}, void 0, "This is an informative message."))))
      );
    }
    /* eslint-enable no-alert */

  }, {
    label: 'Contextual design',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "When inside a ", /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Card"
    }, void 0, "Card"), ", the Alert\u2019s outline is omitted since the background has sufficient contrast without it."),
    Example: function Example() {
      return source(_Card || (_Card = /*#__PURE__*/_jsx(Card, {}, void 0, /*#__PURE__*/_jsx(Stack, {
        space: "medium"
      }, void 0, /*#__PURE__*/_jsx(Alert, {
        tone: "promote"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a promoted message.")), /*#__PURE__*/_jsx(Alert, {
        tone: "info"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is an informative message.")), /*#__PURE__*/_jsx(Alert, {
        tone: "positive"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a positive message.")), /*#__PURE__*/_jsx(Alert, {
        tone: "caution"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a cautionary message.")), /*#__PURE__*/_jsx(Alert, {
        tone: "critical"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a critical message."))))));
    }
  }]
};
export default docs;