import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _jsx from '@babel/runtime/helpers/jsx';

let _Placeholder,
  _Placeholder2,
  _Placeholder3,
  _Stack2,
  _Stack3,
  _Placeholder4,
  _Placeholder5,
  _Placeholder6,
  _Stack4,
  _Stack5,
  _Stack6,
  _Stack7,
  _Hidden,
  _Hidden2,
  _Hidden3,
  _Hidden4,
  _Hidden5,
  _Stack8;

import React, { Fragment } from 'react';
import { Box, Stack, Hidden } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { spaces } from '../../utils/docsHelpers';

const Container = function Container(_ref) {
  const children = _ref.children;
  return /* #__PURE__*/ _jsx(
    Box,
    {
      style: {
        maxWidth: '300px',
      },
    },
    void 0,
    children,
  );
};

Container.displayName = 'Container';
export var screenshots = {
  screenshotWidths: [320, 768, 1200],
  screenshotOnlyInWireframe: true,
  examples: [].concat(
    _toConsumableArray(
      spaces.map(function (space) {
        let _Stack;

        return {
          label: 'Space: '.concat(space),
          Container,
          Example: function Example() {
            return (
              _Stack ||
              (_Stack = /* #__PURE__*/ _jsx(
                Stack,
                {
                  space,
                },
                void 0,
                _Placeholder ||
                  (_Placeholder = /* #__PURE__*/ _jsx(Placeholder, {
                    height: 40,
                  })),
                _Placeholder2 ||
                  (_Placeholder2 = /* #__PURE__*/ _jsx(Placeholder, {
                    height: 40,
                  })),
                _Placeholder3 ||
                  (_Placeholder3 = /* #__PURE__*/ _jsx(Placeholder, {
                    height: 40,
                  })),
              ))
            );
          },
        };
      }),
    ),
    [
      {
        label: 'Align to center',
        Container,
        Example: function Example() {
          return (
            _Stack2 ||
            (_Stack2 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'gutter',
                align: 'center',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
                width: 40,
              }),
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
                width: 60,
              }),
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
                width: 80,
              }),
            ))
          );
        },
      },
      {
        label: 'Align to right',
        Container,
        Example: function Example() {
          return (
            _Stack3 ||
            (_Stack3 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'gutter',
                align: 'right',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
                width: 40,
              }),
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
                width: 60,
              }),
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
                width: 80,
              }),
            ))
          );
        },
      },
      {
        label:
          'Responsive alignment (e.g. center on mobile, left from tablet upwards)',
        Container,
        Example: function Example() {
          return /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'gutter',
              align: ['center', 'left'],
            },
            void 0,
            _Placeholder4 ||
              (_Placeholder4 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
                width: 40,
              })),
            _Placeholder5 ||
              (_Placeholder5 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
                width: 60,
              })),
            _Placeholder6 ||
              (_Placeholder6 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
                width: 80,
              })),
          );
        },
      },
      {
        label: 'Dividers',
        Container,
        Example: function Example() {
          return (
            _Stack4 ||
            (_Stack4 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'gutter',
                dividers: true,
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
              }),
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
              }),
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
              }),
            ))
          );
        },
      },
      {
        label: 'Strong dividers',
        Container,
        Example: function Example() {
          return (
            _Stack5 ||
            (_Stack5 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'gutter',
                dividers: 'strong',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
              }),
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
              }),
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
              }),
            ))
          );
        },
      },
      {
        label:
          'Test - Should flatten fragments (6 placeholders should be evenly spaced)',
        Container,
        Example: function Example() {
          return (
            _Stack6 ||
            (_Stack6 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'small',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Fragment,
                {},
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 40,
                }),
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 40,
                }),
                /* #__PURE__*/ _jsx(
                  Fragment,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Placeholder, {
                    height: 40,
                  }),
                  /* #__PURE__*/ _jsx(
                    Fragment,
                    {},
                    void 0,
                    /* #__PURE__*/ _jsx(Placeholder, {
                      height: 40,
                    }),
                  ),
                ),
              ),
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
              }),
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
              }),
            ))
          );
        },
      },
      {
        label: 'Responsively hiding stack items',
        Container,
        Example: function Example() {
          return (
            _Stack7 ||
            (_Stack7 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'gutter',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
                label: '1',
              }),
              /* #__PURE__*/ _jsx(
                Hidden,
                {
                  below: 'tablet',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 40,
                  label: '2',
                }),
              ),
              /* #__PURE__*/ _jsx(
                Hidden,
                {
                  above: 'mobile',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 40,
                  label: '3',
                }),
              ),
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
                label: '4',
              }),
            ))
          );
        },
      },
      {
        label:
          'Test - Hidden stack items with responsive alignment (should be center aligned showing 3 + 4 on mobile, right aligned showing 2 + 3 + 4 on tablet, left aligned showing 1 + 2 + 3 on desktop)',
        Container,
        Example: function Example() {
          return /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'gutter',
              align: ['center', 'right', 'left'],
            },
            void 0,
            _Hidden ||
              (_Hidden = /* #__PURE__*/ _jsx(
                Hidden,
                {
                  below: 'desktop',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  width: 40,
                  height: 40,
                  label: '1',
                }),
              )),
            _Hidden2 ||
              (_Hidden2 = /* #__PURE__*/ _jsx(
                Hidden,
                {
                  below: 'tablet',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  width: 40,
                  height: 40,
                  label: '2',
                }),
              )),
            _Hidden3 ||
              (_Hidden3 = /* #__PURE__*/ _jsx(
                Hidden,
                {
                  print: true,
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  width: 40,
                  height: 40,
                  label: '3',
                }),
              )),
            _Hidden4 ||
              (_Hidden4 = /* #__PURE__*/ _jsx(
                Hidden,
                {
                  above: 'tablet',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  width: 40,
                  height: 40,
                  label: '4',
                }),
              )),
            _Hidden5 ||
              (_Hidden5 = /* #__PURE__*/ _jsx(
                Hidden,
                {
                  screen: true,
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  width: 40,
                  height: 40,
                  label: 'This should not be visible',
                }),
              )),
          );
        },
      },
      {
        label:
          'Test - Hidden stack items with dividers (should show 3 + 4 on mobile, 2 + 3 + 4 on tablet, and 1 + 2 + 3 on desktop)',
        Container,
        Example: function Example() {
          return (
            _Stack8 ||
            (_Stack8 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'gutter',
                dividers: true,
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Hidden,
                {
                  below: 'desktop',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 40,
                  label: '1',
                }),
              ),
              /* #__PURE__*/ _jsx(
                Hidden,
                {
                  below: 'tablet',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 40,
                  label: '2',
                }),
              ),
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
                label: '3',
              }),
              /* #__PURE__*/ _jsx(
                Hidden,
                {
                  above: 'tablet',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 40,
                  label: '4',
                }),
              ),
              /* #__PURE__*/ _jsx(
                Hidden,
                {
                  screen: true,
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 40,
                  label: 'This should not be visible',
                }),
              ),
            ))
          );
        },
      },
    ],
  ),
};
