import _jsx from '@babel/runtime/helpers/jsx';

let _Stack, _Stack2, _Tabs, _Card, _Stack3, _Tabs2, _Card2;

import React from 'react';
import {
  Stack,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  TabsProvider,
  Badge,
  Card,
} from '..';
import { Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';
export var galleryItems = [
  {
    label: 'Left aligned',
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
                    'The third tab',
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
                      height: 100,
                      label: 'Panel 1',
                    }),
                  ),
                  /* #__PURE__*/ _jsx(
                    TabPanel,
                    {},
                    void 0,
                    /* #__PURE__*/ _jsx(Placeholder, {
                      height: 100,
                      label: 'Panel 2',
                    }),
                  ),
                  /* #__PURE__*/ _jsx(
                    TabPanel,
                    {},
                    void 0,
                    /* #__PURE__*/ _jsx(Placeholder, {
                      height: 100,
                      label: 'Panel 3',
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
    label: 'Center aligned',
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
                      height: 100,
                      label: 'Panel 1',
                    }),
                  ),
                  /* #__PURE__*/ _jsx(
                    TabPanel,
                    {},
                    void 0,
                    /* #__PURE__*/ _jsx(Placeholder, {
                      height: 100,
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
    label: 'With gutter',
    Example: function Example(_ref3) {
      const id = _ref3.id;
      return source(
        /* #__PURE__*/ _jsx(
          TabsProvider,
          {
            id,
          },
          void 0,
          _Tabs ||
            (_Tabs = /* #__PURE__*/ _jsx(
              Tabs,
              {
                label: 'Test tabs',
                gutter: 'gutter',
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
                    height: 100,
                    label: 'Panel 1',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 100,
                    label: 'Panel 2',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 100,
                    label: 'Panel 3',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 100,
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
    label: 'Full width divider',
    Example: function Example(_ref4) {
      const id = _ref4.id;
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
                      height: 100,
                      label: 'Panel 1',
                    }),
                  ),
                  /* #__PURE__*/ _jsx(
                    TabPanel,
                    {},
                    void 0,
                    /* #__PURE__*/ _jsx(Placeholder, {
                      height: 100,
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
    label: 'No divider',
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
                gutter: 'gutter',
                divider: 'none',
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
                    height: 100,
                    label: 'Panel 1',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 100,
                    label: 'Panel 2',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 100,
                    label: 'Panel 3',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 100,
                    label: 'Panel 4',
                  }),
                ),
              ),
            )),
        ),
      );
    },
  },
];
