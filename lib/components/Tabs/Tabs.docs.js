import _jsx from '@babel/runtime/helpers/jsx';

let _Stack,
  _Stack2,
  _Stack3,
  _Tabs,
  _Card,
  _Tabs2,
  _Card2,
  _Stack4,
  _Tabs3,
  _Card3;

import React from 'react';
import source from '../../utils/source.macro';
import {
  Text,
  Stack,
  TextLink,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  TabsProvider,
  Badge,
  Strong,
  List,
  Card,
} from '..';
import { Placeholder } from '../../playroom/components';
const docs = {
  category: 'Content',
  subComponents: ['TabsProvider', 'Tab', 'TabPanels', 'TabPanel'],
  Example: function Example(_ref) {
    const id = _ref.id;
    return source(
      /* #__PURE__*/ _jsx(
        Card,
        {},
        void 0,
        /* #__PURE__*/ _jsx(
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
        ),
      ),
    );
  },
  accessibility: /* #__PURE__*/ _jsx(
    Text,
    {},
    void 0,
    'Follows the',
    ' ',
    /* #__PURE__*/ _jsx(
      TextLink,
      {
        href: 'https://www.w3.org/TR/wai-aria-practices/#tabpanel',
      },
      void 0,
      'WAI ARIA Tabs Pattern.',
    ),
  ),
  alternatives: [
    {
      name: 'Accordion',
      description: 'For a vertical, expandable list of content sections.',
    },
  ],
  additional: [
    {
      label: 'Design considerations',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'The ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'Tabs'),
        ' and ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'TabPanels'),
        ' components can be positioned wherever you like, e.g. the tab panels can be nested within a ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '/components/Card',
          },
          void 0,
          'Card',
        ),
        ' while the tabs sit above the card.',
      ),
    },
    {
      label: 'Development considerations',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'All tab components must be nested within a',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'TabsProvider'),
          ' which provides the state.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'Somewhere within ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'TabsProvider'),
          ' you must:',
        ),
        /* #__PURE__*/ _jsx(
          List,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            'Provide a ',
            /* #__PURE__*/ _jsx(Strong, {}, void 0, 'Tabs'),
            ' component containing multiple',
            ' ',
            /* #__PURE__*/ _jsx(Strong, {}, void 0, 'Tab'),
            ' components.',
          ),
          /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            'Provide a ',
            /* #__PURE__*/ _jsx(Strong, {}, void 0, 'TabsPanels'),
            ' component containing multiple ',
            /* #__PURE__*/ _jsx(Strong, {}, void 0, 'TabPanel'),
            ' components.',
          ),
        ),
      ),
    },
    {
      label: 'Alignment',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Tabs are left aligned by default, but this can be customised via the',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'align'),
        ' prop on ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'Tabs'),
        '.',
      ),
      Example: function Example(_ref2) {
        const id = _ref2.id;
        return source(
          /* #__PURE__*/ _jsx(
            Card,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
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
                    /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The first tab'),
                    /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The second tab'),
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
            ),
          ),
        );
      },
    },
    {
      label: 'Increasing the divider width',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'In cases where you only have a couple of tabs, you may find that the',
        ' ',
        'tab strip lacks visual affordance. To address this, you can set the',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'divider'),
        ' prop to ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, '\u201Cfull\u201D'),
        ' on the',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'Tabs'),
        ' component.',
      ),
      Example: function Example(_ref3) {
        const id = _ref3.id;
        return source(
          /* #__PURE__*/ _jsx(
            Card,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              TabsProvider,
              {
                id: ''.concat(id, '_1'),
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
                      divider: 'full',
                    },
                    void 0,
                    /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The first tab'),
                    /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The second tab'),
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
            ),
          ),
        );
      },
    },
    {
      label: 'Hiding the divider',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'If you\u2019ve placed the tab strip and tab content on different backgrounds, the divider line is likely to be redundant visual noise. To hide it, you can set the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'divider'),
        ' prop to',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, '\u201Cnone\u201D'),
        ' on the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'Tabs'),
        ' component.',
      ),
      Example: function Example(_ref4) {
        const id = _ref4.id;
        return source(
          /* #__PURE__*/ _jsx(
            TabsProvider,
            {
              id: ''.concat(id, '_2'),
            },
            void 0,
            _Tabs ||
              (_Tabs = /* #__PURE__*/ _jsx(
                Tabs,
                {
                  label: 'Test tabs',
                  divider: 'none',
                },
                void 0,
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The first tab'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The second tab'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The third tab'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The fourth tab'),
              )),
            _Card ||
              (_Card = /* #__PURE__*/ _jsx(
                Card,
                {},
                void 0,
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
          ),
        );
      },
    },
    {
      label: 'Gutters',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Tabs are horizontally scrollable when they\u2019re too wide to fit on screen. If you\u2019d like to align the tabs with content below them (e.g. when the tab panels are inside a card but the tabs are outside), you can provide a ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'gutter'),
        ' prop to ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'Tabs'),
        ' ',
        'that accepts a value from',
        ' ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '/foundations/layout#spacing',
          },
          void 0,
          'Braid\u2019s space scale.',
        ),
      ),
      Example: function Example(_ref5) {
        const id = _ref5.id;
        return source(
          /* #__PURE__*/ _jsx(
            TabsProvider,
            {
              id,
            },
            void 0,
            _Tabs2 ||
              (_Tabs2 = /* #__PURE__*/ _jsx(
                Tabs,
                {
                  label: 'Test tabs',
                  divider: 'none',
                  gutter: 'gutter',
                },
                void 0,
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The first tab'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The second tab'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The third tab'),
                /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The fourth tab'),
              )),
            _Card2 ||
              (_Card2 = /* #__PURE__*/ _jsx(
                Card,
                {},
                void 0,
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
          ),
        );
      },
    },
    {
      label: 'Badge support',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Add a ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '/components/Badge',
          },
          void 0,
          'Badge',
        ),
        ' alongside the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'Tab'),
        ' by using the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'badge'),
        ' prop.',
      ),
      Example: function Example(_ref6) {
        const id = _ref6.id;
        return source(
          /* #__PURE__*/ _jsx(
            Card,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
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
                    },
                    void 0,
                    /* #__PURE__*/ _jsx(Tab, {}, void 0, 'The first tab'),
                    /* #__PURE__*/ _jsx(
                      Tab,
                      {
                        badge: /* #__PURE__*/ _jsx(
                          Badge,
                          {
                            tone: 'positive',
                          },
                          void 0,
                          'Positive',
                        ),
                      },
                      void 0,
                      'The second tab',
                    ),
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
            ),
          ),
        );
      },
    },
    {
      label: 'State management',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Tabs manage their own state by default. If you\u2019d like to manage the state yourself, you must pass an ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'item'),
        ' prop to each',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'Tab'),
        ' and ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'TabPanel'),
        ' element, as well as',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'selectedItem'),
        ' and ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'onChange'),
        ' props to',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'TabsProvider.'),
      ),
      Example: function Example(_ref7) {
        const id = _ref7.id,
          getState = _ref7.getState,
          setState = _ref7.setState,
          setDefaultState = _ref7.setDefaultState;
        return source(
          /* #__PURE__*/ React.createElement(
            React.Fragment,
            null,
            setDefaultState('tab', 'second'),
            /* #__PURE__*/ _jsx(
              TabsProvider,
              {
                id,
                selectedItem: getState('tab'),
                onChange: function onChange(index, item) {
                  return setState('tab', item);
                },
              },
              void 0,
              _Tabs3 ||
                (_Tabs3 = /* #__PURE__*/ _jsx(
                  Tabs,
                  {
                    label: 'Test tabs',
                    gutter: 'gutter',
                    divider: 'none',
                    reserveHitArea: true,
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(
                    Tab,
                    {
                      item: 'first',
                    },
                    void 0,
                    'The first tab',
                  ),
                  /* #__PURE__*/ _jsx(
                    Tab,
                    {
                      item: 'second',
                    },
                    void 0,
                    'The second tab',
                  ),
                  /* #__PURE__*/ _jsx(
                    Tab,
                    {
                      item: 'third',
                    },
                    void 0,
                    'The third tab',
                  ),
                  /* #__PURE__*/ _jsx(
                    Tab,
                    {
                      item: 'fourth',
                    },
                    void 0,
                    'The fourth tab',
                  ),
                )),
              _Card3 ||
                (_Card3 = /* #__PURE__*/ _jsx(
                  Card,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(
                    TabPanels,
                    {},
                    void 0,
                    /* #__PURE__*/ _jsx(
                      TabPanel,
                      {
                        item: 'first',
                      },
                      void 0,
                      /* #__PURE__*/ _jsx(Placeholder, {
                        height: 200,
                        label: 'Panel 1',
                      }),
                    ),
                    /* #__PURE__*/ _jsx(
                      TabPanel,
                      {
                        item: 'second',
                      },
                      void 0,
                      /* #__PURE__*/ _jsx(Placeholder, {
                        height: 200,
                        label: 'Panel 2',
                      }),
                    ),
                    /* #__PURE__*/ _jsx(
                      TabPanel,
                      {
                        item: 'third',
                      },
                      void 0,
                      /* #__PURE__*/ _jsx(Placeholder, {
                        height: 200,
                        label: 'Panel 3',
                      }),
                    ),
                    /* #__PURE__*/ _jsx(
                      TabPanel,
                      {
                        item: 'fourth',
                      },
                      void 0,
                      /* #__PURE__*/ _jsx(Placeholder, {
                        height: 200,
                        label: 'Panel 4',
                      }),
                    ),
                  ),
                )),
            ),
          ),
        );
      },
    },
  ],
};
export default docs;
