import _jsx from '@babel/runtime/helpers/jsx';

let _Columns,
  _Columns2,
  _Column,
  _Column2,
  _Column3,
  _Column4,
  _Column5,
  _Column6,
  _Columns3,
  _Columns4,
  _Column7,
  _Column8,
  _Columns5,
  _Columns6,
  _Columns7,
  _Columns8,
  _Columns9,
  _Column9,
  _Column10,
  _Column11,
  _Column12,
  _Column13,
  _Column14,
  _Column15,
  _Column16,
  _Column17,
  _Column18,
  _Column19,
  _Column20,
  _Columns10,
  _Columns11,
  _Column21,
  _Column22,
  _Column23,
  _Column24,
  _Column25,
  _Column26,
  _Column27,
  _Column28;

import React from 'react';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { Columns, Column } from '../';
export var screenshots = {
  screenshotWidths: [320, 768, 1200],
  screenshotOnlyInWireframe: true,
  examples: [
    {
      label: 'No space',
      Example: function Example() {
        return (
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
          ))
        );
      },
    },
    {
      label: 'Custom space, e.g. small',
      Example: function Example() {
        return (
          _Columns2 ||
          (_Columns2 = /* #__PURE__*/ _jsx(
            Columns,
            {
              space: 'small',
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
          ))
        );
      },
    },
    {
      label: 'Responsive space, e.g. ["small", "large"]',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Columns,
          {
            space: ['small', 'large'],
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
        );
      },
    },
    {
      label:
        'Responsive space with `none` below tablet, e.g. ["none", "gutter"]',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Columns,
          {
            space: ['none', 'gutter'],
          },
          void 0,
          _Column3 ||
            (_Column3 = /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
              }),
            )),
          _Column4 ||
            (_Column4 = /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
              }),
            )),
        );
      },
    },
    {
      label:
        'Responsive space with `none` above mobile, e.g. ["small", "none"]',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Columns,
          {
            space: ['small', 'none'],
          },
          void 0,
          _Column5 ||
            (_Column5 = /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
              }),
            )),
          _Column6 ||
            (_Column6 = /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
              }),
            )),
        );
      },
    },
    {
      label: 'Vertically align to center',
      Example: function Example() {
        return (
          _Columns3 ||
          (_Columns3 = /* #__PURE__*/ _jsx(
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
                height: 60,
              }),
            ),
            /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
              }),
            ),
          ))
        );
      },
    },
    {
      label: 'Vertically align to bottom',
      Example: function Example() {
        return (
          _Columns4 ||
          (_Columns4 = /* #__PURE__*/ _jsx(
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
                height: 60,
              }),
            ),
            /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
              }),
            ),
          ))
        );
      },
    },
    {
      label:
        'Responsive alignment (e.g. top on mobile, center on tablet upwards)',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Columns,
          {
            space: 'small',
            alignY: ['top', 'center'],
          },
          void 0,
          _Column7 ||
            (_Column7 = /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
              }),
            )),
          _Column8 ||
            (_Column8 = /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
              }),
            )),
        );
      },
    },
    {
      label: 'Alignment + collapse',
      Example: function Example() {
        return (
          _Columns5 ||
          (_Columns5 = /* #__PURE__*/ _jsx(
            Columns,
            {
              space: 'small',
              collapseBelow: 'tablet',
              alignY: 'center',
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
                height: 100,
              }),
            ),
          ))
        );
      },
    },
    {
      label: 'Collapse below tablet',
      Example: function Example() {
        return (
          _Columns6 ||
          (_Columns6 = /* #__PURE__*/ _jsx(
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
          ))
        );
      },
    },
    {
      label: 'Collapse below desktop',
      Example: function Example() {
        return (
          _Columns7 ||
          (_Columns7 = /* #__PURE__*/ _jsx(
            Columns,
            {
              space: 'small',
              collapseBelow: 'desktop',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Column,
              {},
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
          ))
        );
      },
    },
    {
      label: 'Collapse below tablet with custom space, e.g. "small"',
      Example: function Example() {
        return (
          _Columns8 ||
          (_Columns8 = /* #__PURE__*/ _jsx(
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
          ))
        );
      },
    },
    {
      label: 'Collapse below desktop with custom space, e.g. "small"',
      Example: function Example() {
        return (
          _Columns9 ||
          (_Columns9 = /* #__PURE__*/ _jsx(
            Columns,
            {
              space: 'small',
              collapseBelow: 'desktop',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Column,
              {},
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
          ))
        );
      },
    },
    {
      label:
        'Collapse below tablet with responsive space, e.g. ["small", "large"]',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Columns,
          {
            space: ['small', 'large'],
            collapseBelow: 'tablet',
          },
          void 0,
          _Column9 ||
            (_Column9 = /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'First',
              }),
            )),
          _Column10 ||
            (_Column10 = /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'Second',
              }),
            )),
        );
      },
    },
    {
      label:
        'Collapse below desktop with responsive space, e.g. ["small", "medium", "xlarge"]',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Columns,
          {
            space: ['small', 'medium', 'xlarge'],
            collapseBelow: 'desktop',
          },
          void 0,
          _Column11 ||
            (_Column11 = /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'First',
              }),
            )),
          _Column12 ||
            (_Column12 = /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'Second',
              }),
            )),
        );
      },
    },
    {
      label:
        'Collapse below tablet with responsive space and `none` below tablet, e.g. ["none", "gutter"]',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Columns,
          {
            space: ['none', 'gutter'],
            collapseBelow: 'tablet',
          },
          void 0,
          _Column13 ||
            (_Column13 = /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'First',
              }),
            )),
          _Column14 ||
            (_Column14 = /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'Second',
              }),
            )),
        );
      },
    },
    {
      label:
        'Collapse below desktop with responsive space and `none` below desktop, e.g. ["none", "xsmall", gutter"]',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Columns,
          {
            space: ['none', 'xsmall', 'gutter'],
            collapseBelow: 'desktop',
          },
          void 0,
          _Column15 ||
            (_Column15 = /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'First',
              }),
            )),
          _Column16 ||
            (_Column16 = /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'Second',
              }),
            )),
        );
      },
    },
    {
      label:
        'Collapse below tablet with responsive space and `none` above mobile, e.g. ["small", "none"]',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Columns,
          {
            space: ['small', 'none'],
            collapseBelow: 'tablet',
          },
          void 0,
          _Column17 ||
            (_Column17 = /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'First',
              }),
            )),
          _Column18 ||
            (_Column18 = /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'Second',
              }),
            )),
        );
      },
    },
    {
      label:
        'Collapse below desktop with responsive space and `none` above tablet, e.g. ["small", "medium, "none"]',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Columns,
          {
            space: ['small', 'medium', 'none'],
            collapseBelow: 'desktop',
          },
          void 0,
          _Column19 ||
            (_Column19 = /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'First',
              }),
            )),
          _Column20 ||
            (_Column20 = /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'Second',
              }),
            )),
        );
      },
    },
    {
      label: 'Reverse',
      Example: function Example() {
        return (
          _Columns10 ||
          (_Columns10 = /* #__PURE__*/ _jsx(
            Columns,
            {
              space: 'small',
              reverse: true,
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Column,
              {},
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
          ))
        );
      },
    },
    {
      label:
        'Test: Collapsed "content" columns should be full width when setting "alignY"',
      Example: function Example() {
        return (
          _Columns11 ||
          (_Columns11 = /* #__PURE__*/ _jsx(
            Columns,
            {
              space: 'small',
              alignY: 'bottom',
              collapseBelow: 'tablet',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'No width',
              }),
            ),
            /* #__PURE__*/ _jsx(
              Column,
              {
                width: '1/2',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
                label: '1/2 width',
              }),
            ),
            /* #__PURE__*/ _jsx(
              Column,
              {
                width: 'content',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 140,
                label: 'Content width',
              }),
            ),
          ))
        );
      },
    },
    {
      label:
        'Test - collapseBelow + align: On mobile should be vertical and left aligned, on tablet should be horizontal and centre aligned, on desktop should be horizontal and right aligned',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Columns,
          {
            space: 'small',
            collapseBelow: 'tablet',
            align: ['left', 'center', 'right'],
          },
          void 0,
          _Column21 ||
            (_Column21 = /* #__PURE__*/ _jsx(
              Column,
              {
                width: '1/3',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'First',
              }),
            )),
          _Column22 ||
            (_Column22 = /* #__PURE__*/ _jsx(
              Column,
              {
                width: '1/3',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'Second',
              }),
            )),
        );
      },
    },
    {
      label:
        'Test - collapseBelow + align: On mobile should be vertical and left aligned, on tablet should be horizontal and centre aligned, on desktop should be horizontal and right aligned',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Columns,
          {
            space: 'small',
            collapseBelow: 'desktop',
            align: ['left', 'center', 'right'],
          },
          void 0,
          _Column23 ||
            (_Column23 = /* #__PURE__*/ _jsx(
              Column,
              {
                width: '1/3',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'First',
              }),
            )),
          _Column24 ||
            (_Column24 = /* #__PURE__*/ _jsx(
              Column,
              {
                width: '1/3',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'Second',
              }),
            )),
        );
      },
    },
    {
      label:
        'Test - collapseBelow + align + reverse: On mobile should be vertical and left aligned, on tablet should be reversed horizontally and centre aligned, on desktop should be reversed horizontally and right aligned',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Columns,
          {
            space: 'small',
            collapseBelow: 'tablet',
            align: ['left', 'center', 'right'],
            reverse: true,
          },
          void 0,
          _Column25 ||
            (_Column25 = /* #__PURE__*/ _jsx(
              Column,
              {
                width: '1/3',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'First',
              }),
            )),
          _Column26 ||
            (_Column26 = /* #__PURE__*/ _jsx(
              Column,
              {
                width: '1/3',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'Second',
              }),
            )),
        );
      },
    },
    {
      label:
        'Test - collapseBelow + align + reverse: On mobile should be vertical and left aligned, on tablet should be vertical and centre aligned, on desktop should be reversed horizontally and right aligned',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Columns,
          {
            space: 'small',
            collapseBelow: 'desktop',
            align: ['left', 'center', 'right'],
            reverse: true,
          },
          void 0,
          _Column27 ||
            (_Column27 = /* #__PURE__*/ _jsx(
              Column,
              {
                width: '1/3',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'First',
              }),
            )),
          _Column28 ||
            (_Column28 = /* #__PURE__*/ _jsx(
              Column,
              {
                width: '1/3',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'Second',
              }),
            )),
        );
      },
    },
  ],
};
