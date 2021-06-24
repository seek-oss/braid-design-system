import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { TabsProvider, Tabs, Tab, TabPanels, TabPanel, Badge, Stack, Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [{
  name: '2 Tabs',
  code: source( /*#__PURE__*/_jsx(TabsProvider, {}, void 0, /*#__PURE__*/_jsx(Stack, {
    space: "medium"
  }, void 0, /*#__PURE__*/_jsx(Tabs, {}, void 0, /*#__PURE__*/_jsx(Tab, {}, void 0, "First"), /*#__PURE__*/_jsx(Tab, {}, void 0, "Second")), /*#__PURE__*/_jsx(TabPanels, {}, void 0, /*#__PURE__*/_jsx(TabPanel, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
    label: "First",
    height: 200
  })), /*#__PURE__*/_jsx(TabPanel, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
    label: "Second",
    height: 200
  }))))))
}, {
  name: '2 Tabs with Badge',
  code: source( /*#__PURE__*/_jsx(TabsProvider, {}, void 0, /*#__PURE__*/_jsx(Stack, {
    space: "medium"
  }, void 0, /*#__PURE__*/_jsx(Tabs, {}, void 0, /*#__PURE__*/_jsx(Tab, {}, void 0, "First"), /*#__PURE__*/_jsx(Tab, {
    badge: /*#__PURE__*/_jsx(Badge, {
      tone: "positive"
    }, void 0, "Badge")
  }, void 0, "Second")), /*#__PURE__*/_jsx(TabPanels, {}, void 0, /*#__PURE__*/_jsx(TabPanel, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
    label: "First",
    height: 200
  })), /*#__PURE__*/_jsx(TabPanel, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
    label: "Second",
    height: 200
  }))))))
}, {
  name: '2 Tabs (Centred)',
  code: source( /*#__PURE__*/_jsx(TabsProvider, {}, void 0, /*#__PURE__*/_jsx(Stack, {
    space: "medium"
  }, void 0, /*#__PURE__*/_jsx(Tabs, {
    align: "center"
  }, void 0, /*#__PURE__*/_jsx(Tab, {}, void 0, "First"), /*#__PURE__*/_jsx(Tab, {}, void 0, "Second")), /*#__PURE__*/_jsx(TabPanels, {}, void 0, /*#__PURE__*/_jsx(TabPanel, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
    label: "First",
    height: 200
  })), /*#__PURE__*/_jsx(TabPanel, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
    label: "Second",
    height: 200
  }))))))
}, {
  name: '3 Tabs',
  code: source( /*#__PURE__*/_jsx(TabsProvider, {}, void 0, /*#__PURE__*/_jsx(Stack, {
    space: "medium"
  }, void 0, /*#__PURE__*/_jsx(Tabs, {}, void 0, /*#__PURE__*/_jsx(Tab, {}, void 0, "First"), /*#__PURE__*/_jsx(Tab, {}, void 0, "Second"), /*#__PURE__*/_jsx(Tab, {}, void 0, "Third")), /*#__PURE__*/_jsx(TabPanels, {}, void 0, /*#__PURE__*/_jsx(TabPanel, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
    label: "First",
    height: 200
  })), /*#__PURE__*/_jsx(TabPanel, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
    label: "Second",
    height: 200
  })), /*#__PURE__*/_jsx(TabPanel, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
    label: "Third",
    height: 200
  }))))))
}, {
  name: '3 Tabs with Badge',
  code: source( /*#__PURE__*/_jsx(TabsProvider, {}, void 0, /*#__PURE__*/_jsx(Stack, {
    space: "medium"
  }, void 0, /*#__PURE__*/_jsx(Tabs, {}, void 0, /*#__PURE__*/_jsx(Tab, {}, void 0, "First"), /*#__PURE__*/_jsx(Tab, {}, void 0, "Second"), /*#__PURE__*/_jsx(Tab, {
    badge: /*#__PURE__*/_jsx(Badge, {
      tone: "positive"
    }, void 0, "Badge")
  }, void 0, "Third")), /*#__PURE__*/_jsx(TabPanels, {}, void 0, /*#__PURE__*/_jsx(TabPanel, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
    label: "First",
    height: 200
  })), /*#__PURE__*/_jsx(TabPanel, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
    label: "Second",
    height: 200
  })), /*#__PURE__*/_jsx(TabPanel, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
    label: "Third",
    height: 200
  }))))))
}, {
  name: '3 Tabs (Centred)',
  code: source( /*#__PURE__*/_jsx(TabsProvider, {}, void 0, /*#__PURE__*/_jsx(Stack, {
    space: "medium"
  }, void 0, /*#__PURE__*/_jsx(Tabs, {
    align: "center"
  }, void 0, /*#__PURE__*/_jsx(Tab, {}, void 0, "First"), /*#__PURE__*/_jsx(Tab, {}, void 0, "Second"), /*#__PURE__*/_jsx(Tab, {}, void 0, "Third")), /*#__PURE__*/_jsx(TabPanels, {}, void 0, /*#__PURE__*/_jsx(TabPanel, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
    label: "First",
    height: 200
  })), /*#__PURE__*/_jsx(TabPanel, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
    label: "Second",
    height: 200
  })), /*#__PURE__*/_jsx(TabPanel, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
    label: "Third",
    height: 200
  }))))))
}];