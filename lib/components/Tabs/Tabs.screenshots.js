import _jsx from '@babel/runtime/helpers/jsx';

let _Stack,
  _Stack2,
  _Stack3,
  _Stack4,
  _Stack5,
  _Stack6,
  _Stack7,
  _Stack8,
  _Stack9,
  _Stack10;

import React from 'react';
import { Stack, Tabs, Tab, TabPanel, TabPanels, TabsProvider, Badge } from '..';
import { Placeholder } from '../../playroom/components';
export var screenshots = {
  screenshotWidths: [320, 1200],
  examples: [
    {
      label: 'Left aligned',
      Example: function Example(_ref) {
        const id = _ref.id;
        return /* #__PURE__*/ _jsx(
          TabsProvider,
          {
            id,
          },
          void 0,
          _Stack ||
            (_Stack = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Tabs,
                {
                  label: 'Test tabs',
                },
                void 0,
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The first tab'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The second tab'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The third tab'),
                /* #__PURE__*/ _jsx(
                  Tab,
                  {
                    badge: /* #__PURE__*/ _jsx(
                      Badge,
                      {
                        tone: 'positive',
                      },
                      void 0,
                      'New',
                    ),
                  },
                  void 0,
                  'The fourth tab',
                ),
              ),
              /* #__PURE__*/ _jsx(
                TabPanels,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 1',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 2',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 3',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 4',
                  }),
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Center aligned',
      Example: function Example(_ref2) {
        const id = _ref2.id;
        return /* #__PURE__*/ _jsx(
          TabsProvider,
          {
            id,
          },
          void 0,
          _Stack2 ||
            (_Stack2 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Tabs,
                {
                  label: 'Test tabs',
                  align: 'center',
                },
                void 0,
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'Tab 1'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'Tab 2'),
              ),
              /* #__PURE__*/ _jsx(
                TabPanels,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 1',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 2',
                  }),
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'With gutter',
      Example: function Example(_ref3) {
        const id = _ref3.id;
        return /* #__PURE__*/ _jsx(
          TabsProvider,
          {
            id,
          },
          void 0,
          _Stack3 ||
            (_Stack3 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Tabs,
                {
                  label: 'Test tabs',
                  gutter: 'gutter',
                },
                void 0,
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The first tab'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The second tab'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The third tab'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The fourth tab'),
              ),
              /* #__PURE__*/ _jsx(
                TabPanels,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 1',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 2',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 3',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 4',
                  }),
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'With gutter and reserved hit area',
      Example: function Example(_ref4) {
        const id = _ref4.id;
        return /* #__PURE__*/ _jsx(
          TabsProvider,
          {
            id,
          },
          void 0,
          _Stack4 ||
            (_Stack4 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Tabs,
                {
                  label: 'Test tabs',
                  gutter: 'gutter',
                  reserveHitArea: true,
                },
                void 0,
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The first tab'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The second tab'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The third tab'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The fourth tab'),
              ),
              /* #__PURE__*/ _jsx(
                TabPanels,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 1',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 2',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 3',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 4',
                  }),
                ),
              ),
            )),
        );
      },
    },
    {
      label:
        'Test: Center aligned tabs should be left aligned on mobile when content is too wide',
      Example: function Example(_ref5) {
        const id = _ref5.id;
        return /* #__PURE__*/ _jsx(
          TabsProvider,
          {
            id,
          },
          void 0,
          _Stack5 ||
            (_Stack5 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Tabs,
                {
                  label: 'Test tabs',
                  align: 'center',
                },
                void 0,
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The first tab'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The second tab'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The third tab'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The fourth tab'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The fifth tab'),
              ),
              /* #__PURE__*/ _jsx(
                TabPanels,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 1',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 2',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 3',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 4',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 5',
                  }),
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Test: Selected tab should be scrolled into view on load',
      Example: function Example(_ref6) {
        const id = _ref6.id;
        return /* #__PURE__*/ _jsx(
          TabsProvider,
          {
            id,
            selectedItem: '4',
          },
          void 0,
          _Stack6 ||
            (_Stack6 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Tabs,
                {
                  label: 'Test tabs',
                  align: 'center',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Tab,
                  {
                    item: '1',
                  },
                  void 0,
                  'The first tab',
                ),
                /* #__PURE__*/ _jsx(
                  Tab,
                  {
                    item: '2',
                  },
                  void 0,
                  'The second tab',
                ),
                /* #__PURE__*/ _jsx(
                  Tab,
                  {
                    item: '3',
                  },
                  void 0,
                  'The third tab',
                ),
                /* #__PURE__*/ _jsx(
                  Tab,
                  {
                    item: '4',
                  },
                  void 0,
                  'The fourth tab',
                ),
                /* #__PURE__*/ _jsx(
                  Tab,
                  {
                    item: '5',
                  },
                  void 0,
                  'The fifth tab',
                ),
              ),
              /* #__PURE__*/ _jsx(
                TabPanels,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 1',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 2',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 3',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 4',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 5',
                  }),
                ),
              ),
            )),
        );
      },
    },
    {
      label:
        'Test: Selected tab with gutter should be scrolled into view on load',
      Example: function Example(_ref7) {
        const id = _ref7.id;
        return /* #__PURE__*/ _jsx(
          TabsProvider,
          {
            id,
            selectedItem: '3',
          },
          void 0,
          _Stack7 ||
            (_Stack7 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Tabs,
                {
                  label: 'Test tabs',
                  align: 'center',
                  gutter: 'gutter',
                  reserveHitArea: true,
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Tab,
                  {
                    item: '1',
                  },
                  void 0,
                  'The first tab',
                ),
                /* #__PURE__*/ _jsx(
                  Tab,
                  {
                    item: '2',
                  },
                  void 0,
                  'The second tab',
                ),
                /* #__PURE__*/ _jsx(
                  Tab,
                  {
                    item: '3',
                  },
                  void 0,
                  'The third tab',
                ),
                /* #__PURE__*/ _jsx(
                  Tab,
                  {
                    item: '4',
                  },
                  void 0,
                  'The fourth tab',
                ),
                /* #__PURE__*/ _jsx(
                  Tab,
                  {
                    item: '5',
                  },
                  void 0,
                  'The fifth tab',
                ),
              ),
              /* #__PURE__*/ _jsx(
                TabPanels,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 1',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 2',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 3',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 4',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 5',
                  }),
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Full width divider',
      Example: function Example(_ref8) {
        const id = _ref8.id;
        return /* #__PURE__*/ _jsx(
          TabsProvider,
          {
            id,
          },
          void 0,
          _Stack8 ||
            (_Stack8 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Tabs,
                {
                  label: 'Test tabs',
                  divider: 'full',
                },
                void 0,
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'Tab 1'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'Tab 2'),
              ),
              /* #__PURE__*/ _jsx(
                TabPanels,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 1',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 2',
                  }),
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Full width divider while center aligned',
      Example: function Example(_ref9) {
        const id = _ref9.id;
        return /* #__PURE__*/ _jsx(
          TabsProvider,
          {
            id,
          },
          void 0,
          _Stack9 ||
            (_Stack9 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Tabs,
                {
                  label: 'Test tabs',
                  align: 'center',
                  divider: 'full',
                },
                void 0,
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'Tab 1'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'Tab 2'),
              ),
              /* #__PURE__*/ _jsx(
                TabPanels,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 1',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 2',
                  }),
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Full width divider with gutter',
      Example: function Example(_ref10) {
        const id = _ref10.id;
        return /* #__PURE__*/ _jsx(
          TabsProvider,
          {
            id,
          },
          void 0,
          _Stack10 ||
            (_Stack10 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Tabs,
                {
                  label: 'Test tabs',
                  gutter: 'gutter',
                  reserveHitArea: true,
                  divider: 'full',
                },
                void 0,
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'Tab 1'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'Tab 2'),
              ),
              /* #__PURE__*/ _jsx(
                TabPanels,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 1',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 200,
                    label: 'Panel 2',
                  }),
                ),
              ),
            )),
        );
      },
    },
  ],
};
