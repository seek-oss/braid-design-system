import _jsx from '@babel/runtime/helpers/jsx';

let _Columns, _Column, _Column2, _Stack, _Stack2, _Stack3, _Columns2, _Columns3;

import React from 'react';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { Columns, Column, Strong, Text, Stack } from '../';
import source from '../../utils/source.macro';
import { TextLink } from '../TextLink/TextLink';
const docs = {
  category: 'Layout',
  migrationGuide: true,
  subComponents: ['Column'],
  Example: function Example() {
    return source(
      _Columns ||
        (_Columns = /* #__PURE__*/ _jsx(
          Columns,
          {
            space: 'none',
          },
          void 0,
          /* #__PURE__*/ _jsx(
            Column,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 60,
            }),
          ),
          /* #__PURE__*/ _jsx(
            Column,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 60,
            }),
          ),
          /* #__PURE__*/ _jsx(
            Column,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 60,
            }),
          ),
        )),
    );
  },
  alternatives: [
    {
      name: 'Inline',
      description: 'For fine-grained control of spacing and alignment.',
    },
    {
      name: 'Tiles',
      description: 'For laying out content over many columns and rows.',
    },
    {
      name: 'Box',
      description: 'For custom layouts.',
    },
  ],
  additional: [
    {
      label: 'Spacing',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'The ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/foundations/layout#spacing',
            },
            void 0,
            'spacing',
          ),
          ' ',
          'between columns can be adjusted using the ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'space'),
          ' ',
          'prop.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'Responsive values are supported, e.g.',
          ' ',
          /* #__PURE__*/ _jsx(
            Strong,
            {},
            void 0,
            "space={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}",
          ),
        ),
      ),
      Example: function Example() {
        return source(
          /* #__PURE__*/ _jsx(
            Columns,
            {
              space: {
                mobile: 'small',
                tablet: 'medium',
                desktop: 'large',
              },
            },
            void 0,
            _Column ||
              (_Column = /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 60,
                }),
              )),
            _Column2 ||
              (_Column2 = /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 60,
                }),
              )),
          ),
        );
      },
    },
    {
      label: 'Column widths',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'All columns are of equal width by default, but you can also customise the width of each column individually.',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'Column'),
          ' supports widths fractional widths down to',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, '1/5'),
          '.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'If you want a column to be as small as possible, you can also set its ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'width'),
          ' to ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'content'),
          ' which ensures that it\u2019s only as wide as the content within it.',
        ),
      ),
      Example: function Example() {
        return source(
          _Stack ||
            (_Stack = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Columns,
                {
                  space: 'xsmall',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Column,
                  {
                    width: 'content',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: 'content',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: 'fluid',
                  }),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Columns,
                {
                  space: 'xsmall',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Column,
                  {
                    width: '1/5',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: '1/5',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: 'fluid',
                  }),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Columns,
                {
                  space: 'xsmall',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Column,
                  {
                    width: '1/4',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: '1/4',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: 'fluid',
                  }),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Columns,
                {
                  space: 'xsmall',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Column,
                  {
                    width: '1/3',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: '1/3',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: 'fluid',
                  }),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Columns,
                {
                  space: 'xsmall',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Column,
                  {
                    width: '2/5',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: '2/5',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: 'fluid',
                  }),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Columns,
                {
                  space: 'xsmall',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Column,
                  {
                    width: '1/2',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: '1/2',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: 'fluid',
                  }),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Columns,
                {
                  space: 'xsmall',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Column,
                  {
                    width: '3/5',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: '3/5',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: 'fluid',
                  }),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Columns,
                {
                  space: 'xsmall',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Column,
                  {
                    width: '2/3',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: '2/3',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: 'fluid',
                  }),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Columns,
                {
                  space: 'xsmall',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Column,
                  {
                    width: '3/4',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: '3/4',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: 'fluid',
                  }),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Columns,
                {
                  space: 'xsmall',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Column,
                  {
                    width: '4/5',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: '4/5',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 30,
                    label: 'fluid',
                  }),
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Vertical alignment',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Columns with content of varying height can be vertically aligned using the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'alignY'),
        ' prop. Responsive values are supported.',
      ),
      Example: function Example() {
        return source(
          _Stack2 ||
            (_Stack2 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'large',
                dividers: true,
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Columns,
                {
                  space: 'small',
                  alignY: 'top',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 20,
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 80,
                    label: 'top',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 20,
                  }),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Columns,
                {
                  space: 'small',
                  alignY: 'center',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 20,
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 80,
                    label: 'center',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 20,
                  }),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Columns,
                {
                  space: 'small',
                  alignY: 'bottom',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 20,
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 80,
                    label: 'bottom',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 20,
                  }),
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Horizontal alignment',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'When the total width of all the columns is less than the width of the parent container, the columns can be aligned horiontally using the',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'align'),
        ' prop. Responsive values are supported.',
      ),
      Example: function Example() {
        return source(
          _Stack3 ||
            (_Stack3 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'large',
                dividers: true,
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Columns,
                {
                  space: 'small',
                  align: 'left',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Column,
                  {
                    width: '1/5',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 20,
                    label: 'left',
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {
                    width: '1/5',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 20,
                  }),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Columns,
                {
                  space: 'small',
                  align: 'center',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Column,
                  {
                    width: '1/5',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 20,
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {
                    width: '1/5',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 20,
                    label: 'center',
                  }),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Columns,
                {
                  space: 'small',
                  align: 'right',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Column,
                  {
                    width: '1/5',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 20,
                  }),
                ),
                /* #__PURE__*/ _jsx(
                  Column,
                  {
                    width: '1/5',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 20,
                    label: 'right',
                  }),
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Collapsing across breakpoints',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Columns can be collapsed into a single vertical stack responsively using the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'collapseBelow'),
        ' prop. The following results in three columns from the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'tablet'),
        ' breakpoint upwards, but collapse into a vertical stack on ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'mobile'),
        '.',
      ),
      Example: function Example() {
        return source(
          _Columns2 ||
            (_Columns2 = /* #__PURE__*/ _jsx(
              Columns,
              {
                space: 'small',
                collapseBelow: 'tablet',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 60,
                }),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 60,
                }),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 60,
                }),
              ),
            )),
        );
      },
    },
    {
      label: 'Reversing the column order',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'By default, columns are rendered in document order, which also doubles as the screen reader order. If you need the columns to be visually reversed, you can provide the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'reverse'),
        ' prop.',
      ),
      Example: function Example() {
        return source(
          _Columns3 ||
            (_Columns3 = /* #__PURE__*/ _jsx(
              Columns,
              {
                space: 'small',
                reverse: true,
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Column,
                {
                  width: '1/5',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 60,
                  label: 'First',
                }),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 60,
                  label: 'Second',
                }),
              ),
            )),
        );
      },
    },
  ],
};
export default docs;
